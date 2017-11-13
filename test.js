import test from 'ava'
import { loadSchemaJSON, renderSchema } from './src/index'

test('GraphBrainz output', async t => {
  const schema = await loadSchemaJSON('https://graphbrainz.herokuapp.com/')
  let output = ''
  const printer = chunk => {
    output += `${chunk}\n`
  }
  renderSchema(schema, { printer })
  t.snapshot(output)
})
