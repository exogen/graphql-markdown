#!/usr/bin/env node
const parseArgs = require('minimist')
const loadSchemaJSON = require('./loadSchemaJSON')
const renderSchema = require('./renderSchema')

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

  Options:

    --title <string>       Change the document title
    --prologue <string>    Include custom Markdown at the beginning of the document
    --epilogue <string>    Include custom Markdown at the end of the document
`)
}

if (require.main === module) {
  const args = parseArgs(process.argv.slice(2))

  if (args.help) {
    printHelp()
  } else if (args.version) {
    console.log(require('../package.json').version)
  } else if (args._.length === 1) {
    const schemaPath = args._[0]
    loadSchemaJSON(schemaPath).then(schema => {
      renderSchema(schema, args)
      safeExit(0) // Prevents error when writing to a pipe.
    })
  } else {
    printHelp()
    safeExit(1)
  }
}

module.exports = { loadSchemaJSON, renderSchema }
