# penjj-style [![npm version](https://badge.fury.io/js/eslint-plugin-all-in-one.svg)](https://www.npmjs.com/package/eslint-plugin-all-in-one) ![Build Status](https://github.com/penjj/eslint-plugin-all-in-one/actions/workflows/release.yml/badge.svg)

个人代码风格规则封装

包含vue、solidjs、astro、react等框架代码风格封装，同时也包括了 prettier、typescript、stylelint等规则封装。

优点在于简化配置过程，不需要去繁琐的安装各类规则插件，并且通过package.json单个文件进行配置，无需额外的文件，即可使用。


## Install
```bash
pnpm i @penjj/eslint-config @penjj/stylelint -D
```

## Usage

```json5
// package.json
// 无需安装 eslint、prettier等依赖
{
  "eslintConfig": {
    "extends": "@penjj"
  },
  "prettier": "@penjj/prettier-config",
  "stylelint": "@penjj/stylelint"
}
```
