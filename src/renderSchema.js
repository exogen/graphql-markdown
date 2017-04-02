'use strict'
const marked = require('marked')

// Ideally, we could just spit out the existing description Markdown everywhere
// and leave it to be rendered by whatever processes the output. But some
// Markdown renderers, including GitHub's, don't process Markdown if it's within
// an HTML tag. So in some places (like descriptions of the types themselves) we
// just output the raw description. In other places, like table cells, we need
// to output pre-rendered Markdown, otherwise GitHub won't interpret it.
marked.setOptions({ gfm: true })

function markdown (markup) {
  let output = marked(markup || '')
    // Join lines, unless the next line starts with a tag.
    .replace(/\n(?!<)/g, ' ')
    // Wrap after 80 characters.
    .replace(/([^\n]{80,}?) /g, '$1\n')
    .trim()
  // If there's only one paragraph, unwrap it.
  if (output.lastIndexOf('<p>') === 0 && output.endsWith('</p>')) {
    output = output.slice(3, -4)
  }
  return output
}

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
  return `[${type.name}](#${type.name.toLowerCase()})`
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
  printer('<table><thead>')
  printer('  <tr>')
  printer('    <th align="left">Field</th>')
  printer('    <th align="right">Argument</th>')
  printer('    <th align="left">Type</th>')
  printer('    <th align="left">Description</th>')
  printer('  </tr>')
  printer('</thead><tbody>')
  type.fields.forEach(field => {
    printer('  <tr>')
    printer(`    <td colspan="2" valign="top"><strong>${field.name}</strong>${field.isDeprecated ? ' ⚠️' : ''}</td>`)
    printer(`    <td valign="top">${markdown(renderType(field.type))}</td>`)
    printer('    <td>')
    if (field.description) {
      // If we were to print an empty, indented line here, the Markdown renderer
      // would think the </td> is a code block.
      printer(`${markdown(field.description)}`)
    }
    if (field.isDeprecated) {
      printer('      <br/><br/><p>⚠️ <strong>DEPRECATED</strong></p>')
      printer(`      <blockquote>${markdown(field.deprecationReason)}</blockquote>`)
    }
    printer('    </td>')
    printer('  </tr>')
    if (field.args.length) {
      field.args.forEach((arg, i) => {
        printer('  <tr>')
        printer(`    <td colspan="2" align="right" valign="top">${arg.name}</td>`)
        printer(`    <td valign="top">${markdown(renderType(arg.type))}</td>`)
        printer(`    <td>${markdown(arg.description)}</td>`)
        printer('  </tr>')
      })
    }
  })
  printer('</tbody></table>')
}

function renderSchema (schema, options) {
  options = options || {}
  const title = options.title || 'Schema Types'
  const prologue = options.prologue || ''
  const epilogue = options.epilogue || ''
  const printer = console.log

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
    printer('<table><thead>')
    printer('  <th align="left">Value</th>')
    printer('  <th align="left">Description</th>')
    printer('</thead><tbody>')
    type.enumValues.forEach(value => {
      printer('  <tr>')
      printer(`    <td valign="top"><strong>${value.name}</strong>${value.isDeprecated ? ' ⚠️' : ''}</td>`)
      printer('    <td>')
      if (value.description) {
        // If we were to print an empty, indented line here, the Markdown renderer
        // would think the </td> is a code block.
        printer(`${markdown(value.description)}`)
      }
      if (value.isDeprecated) {
        printer('      <br/><br/><p>⚠️ <strong>DEPRECATED</strong></p>')
        printer(`      <blockquote>${markdown(value.deprecationReason)}</blockquote>`)
      }
      printer('    </td>')
      printer('  </tr>')
    })
    printer('</tbody></table>')
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
