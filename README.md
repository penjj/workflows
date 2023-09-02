# eslint-plugin-all-in-one [![npm version](https://badge.fury.io/js/eslint-plugin-all-in-one.svg)](https://www.npmjs.com/package/eslint-plugin-all-in-one) ![Build Status](https://github.com/penjj/eslint-plugin-all-in-one/actions/workflows/release.yml/badge.svg)

个人eslint规则封装，包含vue、react、prettier、typescript等规则封装。无需进行其他插件安装和规则配置，并且通过package.json一次引用，即可使用。


## Install
```bash
pnpm i @penjj/eslint-config -D
```

## Usage

```json5
// package.json
// 无需安装 eslint、prettier等依赖
{
  "eslintConfig": {
    "extends": "@penjj"
  },
  "prettier": "@penjj/prettier"
}
```