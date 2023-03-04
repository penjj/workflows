module.exports = {
  plugins: ['svelte3'],
  extends: ['@penjj/eslint-config-typescript', 'plugin:svelte3/recommended'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
}
