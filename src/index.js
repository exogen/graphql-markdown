#!/usr/bin/env node
'use strict'
const parseArgs = require('minimist')
const resolveFrom = require('resolve-from')
const loadSchemaJSON = require('./loadSchemaJSON')
const renderSchema = require('./renderSchema')
const updateSchema = require('./updateSchema')
const diffSchema = require('./diffSchema')

function safeExit (code) {
  process.on('exit', function () {
    process.exit(code)
  })
}

function printHelp () {
  const name = require('../package.json').name
  console.log(`
  Usage: ${name} [options] <schema>

  Output a Markdown document with rendered descriptions and links between types.
  The schema may be specified as:

    - a URL to the GraphQL endpoint (the introspection query will be run)
    - a GraphQL document containing the schema (.graphql or .gql)
    - a JSON document containing the schema (as returned by the introspection query)
    - an importable module with the schema as its default export (either an instance
      of GraphQLSchema or a JSON object)

  Options:

    --title <string>       Change the top heading title (default: 'Schema Types')
    --no-title             Do not print a default title
    --prologue <string>    Include custom Markdown after the title
    --epilogue <string>    Include custom Markdown after everything else
    --heading-level <num>  Heading level to begin at, useful if you are embedding the
                           output in a document with other sections (default: 1)
    --update-file <file>   Markdown document to update (between comment markers) or
                           create (if the file does not exist)
    --require <module>     If importing the schema from a module, require the specified
                           module first (useful for e.g. babel-register)
    --version              Print version and exit
`)
}

if (require.main === module) {
  const args = parseArgs(process.argv.slice(2))

  if (args.help) {
    printHelp()
  } else if (args.version) {
    console.log(require('../package.json').version)
  } else if (args._.length === 1) {
    if (args.require) {
      const requirePath = resolveFrom('.', args.require)
      if (requirePath) {
        require(requirePath)
      } else {
        throw new Error(`Could not resolve --require module: ${args.require}`)
      }
    }
    const schemaPath = args._[0]
    loadSchemaJSON(schemaPath).then(schema => {
      const options = {
        title: args.title,
        skipTitle: false,
        prologue: args.prologue,
        epilogue: args.epilogue,
        headingLevel: args['heading-level']
      }
      if (options.title === false) {
        options.title = ''
        options.skipTitle = true
      } else if (Array.isArray(options.title)) {
        options.title.forEach(value => {
          if (typeof value === 'string') {
            options.title = value
          } else if (value === false) {
            options.skipTitle = true
          }
        })
      }
      const updateFile = args['update-file']
      if (updateFile) {
        updateSchema(updateFile, schema, options)
          .then(() => {
            safeExit(0)
          })
          .catch(err => {
            console.error(err)
            safeExit(1)
          })
      } else {
        renderSchema(schema, options)
        safeExit(0)
      }
    })
  } else {
    printHelp()
    safeExit(1)
  }
}

module.exports = {
  loadSchemaJSON,
  renderSchema,
  updateSchema,
  diffSchema
}
