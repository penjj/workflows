# eslint-plugin-all-in-one

```bash
# Remove everything related to `eslint` and `prettier`.
npm remove eslint prettier

# Install only `eslint-plugin-all-in-one`.
npm install eslint-plugin-all-in-one -D

# Add the following to your `package.json` file.
# You not need to create `.eslintrc.js` and `.prettierrc.js` files.
{
  "eslintConfig": {
    "extends": [
      "plugin:all-in-one/import",
      "plugin:all-in-one/prettier",
      "plugin:all-in-one/typescript",
      "plugin:all-in-one/react", // If you use React
      "plugin:all-in-one/solid", // If you use Solid
      "plugin:all-in-one/unocss", // If you use Uno.css
      "plugin:all-in-one/vue" // If you use Vue
    ],
    ignorePatterns: [
      "dist",
      "public"
    ]
  },
  "prettier": "eslint-plugin-all-in-one/prettier"
}

```

```bash
""
```
