const path = require('path')
const fs = require('fs')
const fetch = require('node-fetch')
const { graphql, introspectionQuery, buildSchema } = require('graphql')

function schemaToJSON (schema) {
  return graphql(schema, introspectionQuery).then(result => {
    return result.data
  })
}

function fetchSchemaJSON (url) {
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: introspectionQuery })
  }).then(res => res.json()).then(result => result.data)
}

function readFile (filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => err ? reject(err) : resolve(data))
  })
}

function parseSchemaGraphQL (filename) {
  return readFile(filename).then(data => buildSchema(data))
}

function readSchemaJSON (filename) {
  return readFile(filename).then(JSON.parse).then(data => {
    if (data.queryType) {
      return { __schema: data }
    } else if (data.__schema) {
      return data
    } else if (data.data && data.data.__schema) {
      return data.data
    }
    throw new Error(`Cannot find schema in ${filename}`)
  })
}

function requireSchemaJSON (filename) {
  let schema = require(path.resolve(filename))
  if (schema.default) {
    schema = schema.default
  }
  return Promise.resolve(schema)
}

function loadSchemaJSON (schemaPath) {
  if (schemaPath.indexOf('://') >= 0) {
    return fetchSchemaJSON(schemaPath)
  } else if (schemaPath.match(/\.g(raph)?ql$/)) {
    return parseSchemaGraphQL(schemaPath).then(schemaToJSON)
  } else if (schemaPath.match(/\.json$/)) {
    return readSchemaJSON(schemaPath)
  }
  return requireSchemaJSON(schemaPath)
}

module.exports = loadSchemaJSON
