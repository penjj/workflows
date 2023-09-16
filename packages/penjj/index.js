module.exports = {
  extends: [
    'plugin:all-in-one/import',
    'plugin:all-in-one/prettier',
    'plugin:all-in-one/solid',
    'plugin:all-in-one/typescript',
    'plugin:all-in-one/unocss',
    'plugin:all-in-one/vue',
    'plugin:all-in-one/astro',
  ],
  ignorePatterns: ['dist', 'dist-*', 'lib', 'output', 'public'],
}
