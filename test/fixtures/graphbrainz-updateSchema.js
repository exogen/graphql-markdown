const resolveFrom = require('resolve-from')
const {
  default: graphBrainzSchema,
  createSchema,
} = require('graphbrainz/lib/schema')
const { schemaToJSON } = require('../../src/index')

/**
 * Generate an update to the base GraphBrainz schema.
 */
function generateSchema() {
  // Get the instance of `graphql` that `graphbrainz` sees.
  const graphql = require(resolveFrom(
    require.resolve('graphbrainz'),
    'graphql'
  ))

  const extendedSchema = createSchema(graphBrainzSchema, {
    extensions: ['graphbrainz/extensions/cover-art-archive'],
  })

  return schemaToJSON(extendedSchema, { graphql })
}

module.exports = generateSchema()
