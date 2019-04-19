module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['react'],
  parser: 'babel-eslint',
  env: { browser: true, jquery: true },
  rules: {},
  globals: { $: false }
}
