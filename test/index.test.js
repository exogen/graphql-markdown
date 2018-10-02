const fs = require('fs')
const path = require('path')
const tempy = require('tempy')
const {
  run,
  loadSchemaJSON,
  renderSchema,
  updateSchema
} = require('../src/index')

function createPrinter() {
  const printer = chunk => {
    printer.output += `${chunk}\n`
  }
  printer.output = ''
  return printer
}

function createMockConsole() {
  return {
    log: createPrinter(),
    error: createPrinter()
  }
}

function readFile(filename) {
  filename = path.resolve(__dirname, filename)
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      err ? reject(err) : resolve(data)
    })
  })
}

describe('renderSchema()', () => {
  it('renders the GraphBrainz schema', async () => {
    const schema = await loadSchemaJSON('graphbrainz/schema.json')
    const printer = createPrinter()
    renderSchema(schema, { printer })
    const expected = await readFile('./fixtures/graphbrainz.md')
    expect(printer.output).toBe(expected)
  })
})

describe('diffSchema()', () => {
  const schemaDiff = require('./fixtures/cover-art-archive')

  it('outputs a JSON schema containing only additions', async () => {
    expect(await schemaDiff).toMatchSnapshot()
  })

  it('can be rendered', async () => {
    const printer = createPrinter()
    renderSchema(await schemaDiff, { printer })
    const expected = await readFile('./fixtures/cover-art-archive.md')
    expect(printer.output).toBe(expected)
  })
})

describe('loadSchemaJSON()', () => {
  it('can load exported GraphQLSchema objects', async () => {
    const moduleSchema = await loadSchemaJSON('graphbrainz/lib/schema')
    expect(moduleSchema.__schema.queryType.name).toBe('Query')
  })

  it('can load JSON schema files', async () => {
    const jsonFileSchema = await loadSchemaJSON('graphbrainz/schema.json')
    expect(jsonFileSchema.__schema.queryType.name).toBe('Query')
  })

  it('can load GraphQL schema language files', async () => {
    const graphqlFileSchema = await loadSchemaJSON(
      path.resolve(__dirname, './fixtures/graphbrainz.graphql')
    )
    expect(graphqlFileSchema.__schema.queryType.name).toBe('Query')
  })
})

describe('updateSchema()', () => {
  const filename = tempy.file()

  it('adds schema and comment markers to file if it does not exist', async () => {
    const {
      initial,
      graphql
    } = await require('./fixtures/graphbrainz-updateSchema')

    await updateSchema(filename, initial, { graphql })
    const actual = await readFile(filename)
    const expected = await readFile(
      './fixtures/graphbrainz-updateSchema-initial.md'
    )
    expect(actual).toBe(expected)
  })

  it('updates schema between comment markers in an existing file', async () => {
    const {
      updated,
      graphql
    } = await require('./fixtures/graphbrainz-updateSchema')

    await updateSchema(filename, updated, { graphql })
    const actual = await readFile(filename)
    const expected = await readFile(
      './fixtures/graphbrainz-updateSchema-updated.md'
    )
    expect(actual).toBe(expected)
  })
})

describe('run()', () => {
  describe('with no args', () => {
    it('prints the help message', () => {
      const console = createMockConsole()
      run([], { console, exit: false })
      expect({
        stdout: console.log.output,
        stderr: console.error.output
      }).toMatchSnapshot()
    })
  })

  describe('with --help arg', () => {
    it('prints the help message', () => {
      const console = createMockConsole()
      run(['--help'], { console, exit: false })
      expect({
        stdout: console.log.output,
        stderr: console.error.output
      }).toMatchSnapshot()
    })
  })
})
