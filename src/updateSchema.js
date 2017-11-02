const fs = require('fs')
const renderSchema = require('./renderSchema')

function updateMarkdown (doc, newContent, options = {}) {
  const includeMarkers = options.includeMarkers !== false
  const startMarker = options.startMarker || '<!-- START graphql-markdown -->'
  const endMarker = options.endMarker || '<!-- END graphql-markdown -->'
  let startIndex = doc.indexOf(startMarker)
  let endIndex = doc.lastIndexOf(endMarker)
  if (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
    if (includeMarkers) {
      startIndex += startMarker.length
    } else {
      endIndex += endMarker.length
    }
    return doc.slice(0, startIndex) + newContent + doc.slice(endIndex)
  } else if (startIndex === -1) {
    throw new Error(`Start marker not found: ${startMarker}`)
  } else if (endIndex === -1) {
    throw new Error(`End marker not found: ${endMarker}`)
  } else {
    throw new Error('Start marker must precede end marker.')
  }
}

function updateSchema (path, schema, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, doc) => {
      if (err) {
        if (err.code === 'ENOENT') {
          doc = ''
        } else {
          return reject(err)
        }
      }
      let newContent = ''
      const printer = line => {
        newContent += `${line}\n`
      }
      renderSchema(schema, Object.assign({}, options, { printer }))
      if (!doc.trim()) {
        doc = '<!-- START graphql-markdown -->\n<!-- END graphql-markdown -->\n'
      }
      let newDoc = doc
      try {
        newDoc = updateMarkdown(doc, `\n\n${newContent}\n`)
      } catch (err) {
        return reject(err)
      }
      fs.writeFile(path, newDoc, 'utf8', err => {
        if (err) {
          return reject(err)
        }
        resolve()
      })
    })
  })
}

module.exports = updateSchema
