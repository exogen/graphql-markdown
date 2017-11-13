module.exports = {
  extends: [
    'standard',
    'prettier',
    'prettier/standard'
  ],
  env: {
    es6: true,
    node: true
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['warn', {
      singleQuote: true,
      semi: false
    }]
  }
}
