module.exports = {
  parser: 'vue-eslint-parser',
  extends: ['plugin:vue/vue3-recommended'],
  rules: {
    'vue/multi-word-component-names': ['warn'],
    'vue/one-component-per-file': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/component-definition-name-casing': 'off',
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
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts',
        },
      },
    ],
  },
}
