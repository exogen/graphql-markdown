'use strict'
function sortBy(arr, property) {
  arr.sort((a, b) => {
    const aValue = a[property]
    const bValue = b[property]
    if (aValue > bValue) return 1
    if (bValue > aValue) return -1
    return 0
  })
}

function renderType(type, options) {
  if (type.kind === 'NON_NULL') {
    return renderType(type.ofType, options) + '!'
  }
  if (type.kind === 'LIST') {
    return `[${renderType(type.ofType, options)}]`
  }
  const url = options.getTypeURL(type)
  return url ? `[${type.name}](${url})` : type.name
  // return url ? `<a href="${url}">${type.name}</a>` : type.name
}

function renderObject(type, options) {
  options = options || {}
  const skipTitle = options.skipTitle === true
  const printer = options.printer || console.log
  const headingLevel = options.headingLevel || 1
  const getTypeURL = options.getTypeURL
  const isInputObject = type.kind === 'INPUT_OBJECT'

  if (!skipTitle) {
    printer(`\n${'#'.repeat(headingLevel + 2)} ${type.name}\n`)
  }
  if (type.description) {
    printer(`${type.description}\n`)
  }

  if (isInputObject) {
    printer(`\n`)
    printer('|Field|Type|Description|')
    printer('| --- | --- | --- |')
  } else {
    printer('|Field|Argument|Type|Description|')
    printer('| --- | --- | --- | --- |')
  }

  const fields = isInputObject ? type.inputFields : type.fields
  fields.forEach(field => {
    if (!isInputObject && field.args.length) {
      printer(
        `|${field.name}${field.isDeprecated ? ' ⚠️' : ''}||${renderType(
          field.type,
          { getTypeURL }
        )}|${field.description}|`
      )
      field.args.forEach((arg, i) => {
        printer(`||${arg.name}|${renderType(arg.type, { getTypeURL })}||`)
      })
    } else if (!isInputObject) {
      printer(
        `|${field.name}${field.isDeprecated ? ' ⚠️' : ''}||${renderType(
          field.type,
          { getTypeURL }
        )}|${field.description}|`
      )
    } else {
      printer(
        `|${field.name}${field.isDeprecated} ? " ⚠️" : ""|${renderType(
          field.type,
          { getTypeURL }
        )}|${field.description}|`
      )
    }
  })
  if (options.newpage) {
    printer(`\\newpage`)
  }
  // printer('<tr>')
  /* printer(
      `<td colspan="2" valign="top"><strong>${field.name}</strong>${
        field.isDeprecated ? ' ⚠️' : ''
      }</td>`
    )
    printer(`<td valign="top">${renderType(field.type, { getTypeURL })}</td>`)
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
    printer('</tr>') */
  /*
    if (!isInputObject && field.args.length) {
      field.args.forEach((arg, i) => {
        printer('<tr>')
        printer(`<td colspan="2" align="right" valign="top">${arg.name}</td>`)
        printer(`<td valign="top">${renderType(arg.type, { getTypeURL })}</td>`)
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
  if (options.newPage) {
    printer(`\\newpage`)
  } */
}

function renderSchema(schema, options) {
  options = options || {}
  const title = options.title || 'Schema Types'
  const skipTitle = options.skipTitle || false
  const skipTableOfContents = options.skipTableOfContents || false
  const prologue = options.prologue || ''
  const epilogue = options.epilogue || ''
  const printer = options.printer || console.log
  const headingLevel = options.headingLevel || 1
  const unknownTypeURL = options.unknownTypeURL
  const newpage = options.newPage || false

  if (schema.__schema) {
    schema = schema.__schema
  }

  const types = schema.types.filter(type => !type.name.startsWith('__'))
  const typeMap = schema.types.reduce((typeMap, type) => {
    return Object.assign(typeMap, { [type.name]: type })
  }, {})
  const getTypeURL = type => {
    const url = `#${type.name.toLowerCase()}`
    if (typeMap[type.name]) {
      return url
    } else if (typeof unknownTypeURL === 'function') {
      return unknownTypeURL(type)
    } else if (unknownTypeURL) {
      return unknownTypeURL + url
    }
  }

  const queryType = schema.queryType
  const query =
    queryType && types.find(type => type.name === schema.queryType.name)
  const mutationType = schema.mutationType
  const mutation =
    mutationType && types.find(type => type.name === schema.mutationType.name)
  const objects = types.filter(
    type => type.kind === 'OBJECT' && type !== query && type !== mutation
  )
  const inputs = types.filter(type => type.kind === 'INPUT_OBJECT')
  const enums = types.filter(type => type.kind === 'ENUM')
  const scalars = types.filter(type => type.kind === 'SCALAR')
  const interfaces = types.filter(type => type.kind === 'INTERFACE')
  const unions = types.filter(type => type.kind === 'UNION')

  sortBy(objects, 'name')
  sortBy(inputs, 'name')
  sortBy(enums, 'name')
  sortBy(scalars, 'name')
  sortBy(interfaces, 'name')
  sortBy(unions, 'name')

  if (!skipTitle) {
    printer(`${'#'.repeat(headingLevel)} ${title}\n`)
    printer(`\\newpage`)
  }

  if (prologue) {
    printer(`${prologue}\n`)
    if (options.newPage) {
      printer(`\\newpage`)
    }
  }

  if (!skipTableOfContents) {
    // printer('<details>')
    printer('## Table of Contents\n')
    if (query) {
      printer('  * [Query](#query)')
    }
    if (mutation) {
      printer('  * [Mutation](#mutation)')
    }
    if (objects.length) {
      printer('  * [Objects](#objects)')
      objects.forEach(type => {
        printer(`    * [${type.name}](#${type.name.toLowerCase()})`)
      })
    }
    if (inputs.length) {
      printer('  * [Inputs](#inputs)')
      inputs.forEach(type => {
        printer(`    * [${type.name}](#${type.name.toLowerCase()})`)
      })
    }
    if (enums.length) {
      printer('  * [Enums](#enums)')
      enums.forEach(type => {
        printer(`    * [${type.name}](#${type.name.toLowerCase()})`)
      })
    }
    if (scalars.length) {
      printer('  * [Scalars](#scalars)')
      scalars.forEach(type => {
        printer(`    * [${type.name}](#${type.name.toLowerCase()})`)
      })
    }
    if (interfaces.length) {
      printer('  * [Interfaces](#interfaces)')
      interfaces.forEach(type => {
        printer(`    * [${type.name}](#${type.name.toLowerCase()})`)
      })
    }
    if (unions.length) {
      printer('  * [Unions](#unions)')
      unions.forEach(type => {
        printer(`    * [${type.name}](#${type.name.toLowerCase()})`)
      })
    }
    if (options.newPage) {
      printer(`\n`)
      printer(`\\newpage`)
    }
  }

  if (query) {
    printer(
      `\n${'#'.repeat(headingLevel + 1)} Query${
        query.name === 'Query' ? '' : ' (' + query.name + ')'
      }`
    )
    renderObject(query, {
      skipTitle: true,
      headingLevel,
      printer,
      getTypeURL,
      newpage
    })
    if (options.newPage) {
      // printer(`\\newpage`)
    }
  }

  if (mutation) {
    printer(
      `\n${'#'.repeat(headingLevel + 1)} Mutation${
        mutation.name === 'Mutation' ? '' : ' (' + mutation.name + ')'
      }`
    )
    renderObject(mutation, {
      skipTitle: true,
      headingLevel,
      printer,
      getTypeURL,
      newpage
    })
    if (options.newPage) {
      // printer(`\\newpage`)
    }
  }

  if (objects.length) {
    printer(`\n${'#'.repeat(headingLevel + 1)} Objects`)
    objects.forEach(type =>
      renderObject(type, { headingLevel, printer, getTypeURL, newpage })
    )
    if (options.newPage) {
      // printer(`\\newpage`)
    }
  }

  if (inputs.length) {
    printer(`\n${'#'.repeat(headingLevel + 1)} Inputs`)
    inputs.forEach(type =>
      renderObject(type, { headingLevel, printer, getTypeURL, newpage })
    )
    if (options.newPage) {
      printer(`\\newpage`)
    }
  }

  if (enums.length) {
    printer(`\n${'#'.repeat(headingLevel + 1)} Enums`)
    enums.forEach(type => {
      printer(`\n${'#'.repeat(headingLevel + 2)} ${type.name}\n`)
      if (type.description) {
        printer(`${type.description}\n`)
      }
      /* printer('<table>')
      printer('<thead>')
      printer('<th align="left">Value</th>')
      printer('<th align="left">Description</th>')
      printer('</thead>')
      printer('<tbody>') */
      printer('|Value|Description|')
      printer('| --- | --- |')
      type.enumValues.forEach(value => {
        printer(
          `|${value.name}${value.isDeprecated ? ' ⚠️' : ''}|${
            value.description
          }|`
        )
        /* printer('<tr>')
        printer(
          `<td valign="top"><strong>${value.name}</strong>${
            value.isDeprecated ? ' ⚠️' : ''
          }</td>`
        )
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
        printer('</tr>') */
      })
      // printer('</tbody>')
      // printer('</table>')
      if (options.newPage) {
        printer(`\\newpage`)
      }
    })
  }

  if (scalars.length) {
    printer(`\n${'#'.repeat(headingLevel + 1)} Scalars\n`)
    scalars.forEach(type => {
      printer(`${'#'.repeat(headingLevel + 2)} ${type.name}\n`)
      if (type.description) {
        printer(`${type.description}\n`)
      }
    })
    if (options.newPage) {
      printer(`\\newpage`)
    }
  }

  if (interfaces.length) {
    printer(`\n${'#'.repeat(headingLevel + 1)} Interfaces\n`)
    interfaces.forEach(type =>
      renderObject(type, { headingLevel, printer, getTypeURL })
    )
    if (options.newPage) {
      printer(`\\newpage`)
    }
  }

  if (unions.length) {
    printer(`\n${'#'.repeat(headingLevel + 1)} Unions`)
    unions.forEach(type => {
      printer(`\n${'#'.repeat(headingLevel + 2)} ${type.name}\n`)
      if (type.description) {
        printer(`${type.description}\n`)
      }
      printer('<table>')
      printer('<thead>')
      printer('<th align="left">Type</th>')
      printer('<th align="left">Description</th>')
      printer('</thead>')
      printer('<tbody>')
      type.possibleTypes.forEach(objType => {
        const obj = objects.find(o => objType.name === o.name)
        const desc = objType.description || (obj && obj.description)
        printer('<tr>')
        printer(
          `<td valign="top"><strong>${renderType(objType, {
            getTypeURL
          })}</strong></td>`
        )
        if (desc) {
          printer(`<td valign="top">${desc}</td>`)
        } else {
          printer('<td></td>')
        }
        printer('</tr>')
      })
      printer('</tbody>')
      printer('</table>')
    })
  }

  if (epilogue) {
    printer(`\n${epilogue}`)
    if (options.newPage) {
      printer(`\\newpage`)
    }
  }
}

module.exports = renderSchema
