module.exports = {
  pluginSearchDirs: [__dirname],
  plugins: [require.resolve('prettier-plugin-astro')],
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: false,
  proseWrap: 'never',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'avoid',
  trailingComma: 'es5',
  printWidth: 80,
  endOfLine: 'auto',
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: '*.html',
      options: { parser: 'html' },
    },
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
