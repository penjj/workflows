module.exports = {
  plugins: ['import', 'css-import-order'],
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:css-import-order/recommended',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: '.',
      },
    },
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'type',
          'external',
          'index',
          'sibling',
          'parent',
          'internal',
          'builtin',
          'object',
        ],
      },
    ],
    'import/no-unresolved': ['error', { ignore: ['uno.css'] }],
    'max-len': [
      'error',
      {
        code: 80,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
}
