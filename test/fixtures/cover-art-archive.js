const resolveFrom = require('resolve-from')
const {
  default: graphBrainzSchema,
  createSchema,
} = require('graphbrainz/lib/schema')
const { schemaToJSON, diffSchema } = require('../../src/index')

/**
 * Generate a "diff" schema in order to test `diffSchema`.
 */
async function generateDiff() {
  // Get the instance of `graphql` that `graphbrainz` sees.
  const graphql = require(resolveFrom(
    require.resolve('graphbrainz'),
    'graphql'
  ))

  const extendedSchema = createSchema(graphBrainzSchema, {
    extensions: ['graphbrainz/extensions/cover-art-archive'],
  })

  const schemaJSON = await schemaToJSON(graphBrainzSchema, { graphql })
  const extendedSchemaJSON = await schemaToJSON(extendedSchema, { graphql })

  return diffSchema(schemaJSON, extendedSchemaJSON)
}

module.exports = generateDiff()
