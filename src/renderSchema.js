'use strict'

function sortBy (arr, property) {
  arr.sort((a, b) => {
    const aValue = a[property]
    const bValue = b[property]
    if (aValue > bValue) return 1
    if (bValue > aValue) return -1
    return 0
  })
}

function renderType (type) {
  if (type.kind === 'NON_NULL') {
    return renderType(type.ofType) + '!'
  }
  if (type.kind === 'LIST') {
    return `[${renderType(type.ofType)}]`
  }
  return `<a href="#${type.name.toLowerCase()}">${type.name}</a>`
}

function renderObject (type, options) {
  options = options || {}
  const skipTitle = options.skipTitle === true
  const printer = options.printer || console.log

  if (!skipTitle) {
    printer(`\n### ${type.name}\n`)
  }
  if (type.description) {
    printer(`${type.description}\n`)
  }
  printer('<table>')
  printer('<thead>')
  printer('<tr>')
  printer('<th align="left">Field</th>')
  printer('<th align="right">Argument</th>')
  printer('<th align="left">Type</th>')
  printer('<th align="left">Description</th>')
  printer('</tr>')
  printer('</thead>')
  printer('<tbody>')
  type.fields.forEach(field => {
    printer('<tr>')
    printer(`<td colspan="2" valign="top"><strong>${field.name}</strong>${field.isDeprecated ? ' ⚠️' : ''}</td>`)
    printer(`<td valign="top">${renderType(field.type)}</td>`)
    if (field.description || field.isDeprecated) {
      printer('<td>')
      if (field.description) {
        printer(`\n${field.description}\n`)
      }
      if (field.isDeprecated) {
        printer('<p>⚠️ <strong>DEPRECATED</strong></p>')
        if (field.deprecationReason) {
          printer('<blockquote>')
          printer(`\n${field.deprecationReason}\n`)
          printer('</blockquote>')
        }
      }
      printer('</td>')
    } else {
      printer('<td></td>')
    }
    printer('</tr>')
    if (field.args.length) {
      field.args.forEach((arg, i) => {
        printer('<tr>')
        printer(`<td colspan="2" align="right" valign="top">${arg.name}</td>`)
        printer(`<td valign="top">${renderType(arg.type)}</td>`)
        if (arg.description) {
          printer('<td>')
          printer(`\n${arg.description}\n`)
          printer('</td>')
        } else {
          printer(`<td></td>`)
        }
        printer('</tr>')
      })
    }
  })
  printer('</tbody>')
  printer('</table>')
}

function renderSchema (schema, options) {
  options = options || {}
  const title = options.title || 'Schema Types'
  const prologue = options.prologue || ''
  const epilogue = options.epilogue || ''
  const printer = options.printer || console.log

  if (schema.__schema) {
    schema = schema.__schema
  }

  const types = schema.types.filter(type => !type.name.startsWith('__'))

  const query = types.filter(type => type.name === schema.queryType.name)[0]
  const objects = types.filter(type => type.kind === 'OBJECT' && type !== query)
  const enums = types.filter(type => type.kind === 'ENUM')
  const scalars = types.filter(type => type.kind === 'SCALAR')
  const interfaces = types.filter(type => type.kind === 'INTERFACE')

  sortBy(objects, 'name')
  sortBy(enums, 'name')
  sortBy(scalars, 'name')
  sortBy(interfaces, 'name')

  printer(`# ${title}\n`)

  if (prologue) {
    printer(`${prologue}\n`)
  }

  printer('<details>')
  printer('  <summary><strong>Table of Contents</strong></summary>\n')
  printer('  * [Query](#query)')
  printer('  * [Objects](#objects)')
  objects.forEach(type => {
    printer(`    * [${type.name}](#${type.name.toLowerCase()})`)
  })
  printer('  * [Enums](#enums)')
  enums.forEach(type => {
    printer(`    * [${type.name}](#${type.name.toLowerCase()})`)
  })
  printer('  * [Scalars](#scalars)')
  scalars.forEach(type => {
    printer(`    * [${type.name}](#${type.name.toLowerCase()})`)
  })
  printer('  * [Interfaces](#interfaces)')
  interfaces.forEach(type => {
    printer(`    * [${type.name}](#${type.name.toLowerCase()})`)
  })
  printer('\n</details>')

  printer(`\n## Query ${query.name === 'Query' ? '' : '(' + query.name + ')'}`)
  renderObject(query, { skipTitle: true, printer })

  printer('\n## Objects')
  objects.forEach(type => renderObject(type, { printer }))

  printer('\n## Enums')
  enums.forEach(type => {
    printer(`\n### ${type.name}\n`)
    if (type.description) {
      printer(`${type.description}\n`)
    }
    printer('<table>')
    printer('<thead>')
    printer('<th align="left">Value</th>')
    printer('<th align="left">Description</th>')
    printer('</thead>')
    printer('<tbody>')
    type.enumValues.forEach(value => {
      printer('<tr>')
      printer(`<td valign="top"><strong>${value.name}</strong>${value.isDeprecated ? ' ⚠️' : ''}</td>`)
      if (value.description || value.isDeprecated) {
        printer('<td>')
        if (value.description) {
          printer(`\n${value.description}\n`)
        }
        if (value.isDeprecated) {
          printer('<p>⚠️ <strong>DEPRECATED</strong></p>')
          if (value.deprecationReason) {
            printer('<blockquote>')
            printer(`\n${value.deprecationReason}\n`)
            printer('</blockquote>')
          }
        }
        printer('</td>')
      } else {
        printer('<td></td>')
      }
      printer('</tr>')
    })
    printer('</tbody>')
    printer('</table>')
  })

  printer('\n## Scalars\n')
  scalars.forEach(type => {
    printer(`### ${type.name}\n`)
    if (type.description) {
      printer(`${type.description}\n`)
    }
  })

  printer('\n## Interfaces\n')
  interfaces.forEach(type => renderObject(type, { printer }))

  if (epilogue) {
    printer(`\n${epilogue}`)
  }
}

module.exports = renderSchema
