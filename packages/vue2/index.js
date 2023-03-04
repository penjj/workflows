module.exports = {
  parser: 'vue-eslint-parser',
  extends: ['@penjj/eslint-config-typescript', 'plugin:vue/recommended'],
  rules: {
    'vue/multi-word-component-names': ['warn'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
}
