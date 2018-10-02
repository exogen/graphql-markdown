const resolveFrom = require('resolve-from')
const {
  default: graphBrainzSchema,
  createSchema
} = require('graphbrainz/lib/schema')
const { schemaToJSON } = require('../../src/index')

/**
 * Generate an `initial` and `updated` schema, to test running `updateSchema`
 * twice on the same file.
 */
async function generateSchemas() {
  // Get the instance of `graphql` that `graphbrainz` sees.
  const graphql = require(resolveFrom(
    require.resolve('graphbrainz'),
    'graphql'
  ))

  const initial = await schemaToJSON(graphBrainzSchema, { graphql })

  const extendedSchema = createSchema(graphBrainzSchema, {
    extensions: ['graphbrainz/extensions/cover-art-archive']
  })

  const updated = await schemaToJSON(extendedSchema, { graphql })

  return {
    initial,
    updated,
    graphql
  }
}

module.exports = generateSchemas()
