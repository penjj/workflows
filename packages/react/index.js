module.exports = {
  extends: ['@penjj/eslint-config-typescript', 'plugin:react/recommended'],
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: '17.0',
    },
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  globals: {
    React: true,
    ReactDOM: true,
  },
}
