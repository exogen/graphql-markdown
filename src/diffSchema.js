'use strict'
const diff = require('deep-diff')

function toNamedObject (arr, modifier = obj => obj) {
  if (!arr) {
    return {}
  }
  return arr.reduce((obj, value) => {
    obj[value.name] = modifier(value)
    return obj
  }, {})
}

function toNamedArray (obj, modifier = obj => obj) {
  if (!obj) {
    return []
  }
  return Object.entries(obj).map(([key, value]) => {
    return modifier(Object.assign({}, value, { name: key }))
  })
}

function toDiffableSchema (schema) {
  const types = toNamedObject(schema.__schema.types, type => {
    if (type.fields) {
      type = Object.assign({}, type, {
        fields: toNamedObject(type.fields)
      })
    }
    if (type.enumValues) {
      type = Object.assign({}, type, {
        enumValues: toNamedObject(type.enumValues)
      })
    }
    return type
  })

  const directives = toNamedObject(schema.__schema.directives)

  return Object.assign({}, schema, {
    __schema: Object.assign({}, schema.__schema, {
      types,
      directives
    })
  })
}

function fromDiffableSchema (schema) {
  const types = toNamedArray(schema.__schema.types, type => {
    if (type.fields) {
      type = Object.assign({}, type, {
        fields: toNamedArray(type.fields)
      })
    }
    if (type.enumValues) {
      type = Object.assign({}, type, {
        enumValues: toNamedArray(type.enumValues)
      })
    }
    return type
  })

  const directives = toNamedArray(schema.__schema.directives)

  return Object.assign({}, schema, {
    __schema: Object.assign({}, schema.__schema, {
      types,
      directives
    })
  })
}

function diffSchema (oldSchema, newSchema, options) {
  const oldDiffableSchema = toDiffableSchema(oldSchema)
  const newDiffableSchema = toDiffableSchema(newSchema)
  const changes = diff(oldDiffableSchema, newDiffableSchema)
  const diffSchema = changes.reduce((schema, change) => {
    diff.applyChange(schema, newDiffableSchema, change)
    return schema
  }, {})
  const schema = fromDiffableSchema(diffSchema)
  const newTypes = newDiffableSchema.__schema.types
  schema.__schema.types = schema.__schema.types.map(type => {
    if (options.processTypeDiff) {
      type = options.processTypeDiff(type)
    }
    type = Object.assign({}, newTypes[type.name], type)
    if (type.fields) {
      const newFields = newTypes[type.name].fields
      type.fields = type.fields.map(field => newFields[field.name])
    }
    if (type.enumValues) {
      const newEnumValues = newTypes[type.name].enumValues
      type.enumValues = type.enumValues.map(
        enumValue => newEnumValues[enumValue.name]
      )
    }
    return type
  })
  return schema
}

module.exports = diffSchema
