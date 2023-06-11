# eslint-plugin-all-in-one

```bash
# Remove everything related to `eslint` and `prettier`.
npm remove eslint prettier

# Install only `eslint-plugin-all-in-one`.
npm install eslint-plugin-all-in-one -D

# In your `.eslintrc` config file, combine the necessary presets to use `eslint-plugin-all-in-one`.
{
  "root": true,
  "extends": [
    "plugin:all-in-one/import",
    "plugin:all-in-one/prettier",
    "plugin:all-in-one/react",
    "plugin:all-in-one/solid",
    "plugin:all-in-one/typescript",
    "plugin:all-in-one/unocss",
    "plugin:all-in-one/vue"
  ]
}

```
