module.exports = {
  extends: ['standard', 'prettier', 'prettier/standard'],
  env: {
    es6: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
    ]
  }
}
