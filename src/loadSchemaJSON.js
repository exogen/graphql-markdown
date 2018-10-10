'use strict'
const fs = require('fs')
const fetch = require('node-fetch')
const graphql = require('graphql')
const resolveFrom = require('resolve-from')
const isPlainObject = require('lodash.isplainobject')

const DEFAULT_GRAPHQL = graphql

function readFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      filename,
      'utf8',
      (err, data) => (err ? reject(err) : resolve(data))
    )
  })
}

function schemaToJSON(schema, options) {
  options = options || {}
  const graphql = options.graphql || DEFAULT_GRAPHQL
  return graphql.graphql(schema, graphql.introspectionQuery).then(result => {
    return result.data
  })
}

function fetchSchemaJSON(url, extraHeaders) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
  for (var key in extraHeaders) {
    headers[key] = extraHeaders[key]
  }

  const graphql = DEFAULT_GRAPHQL
  return fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ query: graphql.introspectionQuery })
  })
    .then(res => res.json())
    .then(result => result.data)
}

function parseSchemaGraphQL(filename, options) {
  options = options || {}
  const graphql = options.graphql || DEFAULT_GRAPHQL
  return readFile(filename).then(data => graphql.buildSchema(data))
}

async function requireSchema(schemaPath) {
  const schemaModule = resolveFrom('.', schemaPath)
  if (!schemaModule) {
    throw new Error(`Could not resolve schema module: ${schemaPath}`)
  }
  let schema = require(schemaModule)
  if (schema) {
    if (schema.default) {
      schema = schema.default
    }
    // Allow modules to export a Promise that resolves to a schema.
    schema = await schema
  }
  // Getting `.default` and resolving a potential Promise may have resulted in
  // `schema` not being an object anymore.
  if (schema) {
    if (!isPlainObject(schema)) {
      if (schema instanceof DEFAULT_GRAPHQL.GraphQLSchema) {
        return schemaToJSON(schema)
      }
      const graphqlPath = resolveFrom(schemaModule, 'graphql')
      if (!graphqlPath) {
        throw new Error(
          'Could not import the `graphql` instance used by the given schema'
        )
      }
      const graphql = require(graphqlPath)
      if (schema instanceof graphql.GraphQLSchema) {
        return schemaToJSON(schema, { graphql })
      }
    } else if (schema.queryType) {
      return { __schema: schema }
    } else if (schema.__schema) {
      return schema
    } else if (schema.data && schema.data.__schema) {
      return schema.data
    }
  }
  throw new Error(
    `Schema not found in ${schemaModule} - check that you are exporting ` +
      `an instance of GraphQLSchema or the result of an introspection query`
  )
}

function loadSchemaJSON(schemaPath, extraHeaders) {
  if (schemaPath.indexOf('://') >= 0) {
    return fetchSchemaJSON(schemaPath, extraHeaders)
  } else if (schemaPath.match(/\.g(raph)?ql$/)) {
    return parseSchemaGraphQL(schemaPath).then(schemaToJSON)
  }
  return requireSchema(schemaPath)
}

module.exports = { loadSchemaJSON, schemaToJSON }
