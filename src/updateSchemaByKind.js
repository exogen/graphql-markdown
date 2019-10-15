const fs = require('fs')
const updateSchema = require('./updateSchema')

function updateSchemaByKind(item, schema, options) {
  try {
    // Create file if not exists
    fs.closeSync(fs.openSync(item, 'a'))
    const itemType = item.replace('.md', '')

    return updateSchema(`./${item}`, schema, { itemType, ...options })
  } catch (err) {
    console.error(err)
  }
}

module.exports = updateSchemaByKind
