# @penjj/biome-config

[![npm version](https://badge.fury.io/js/@penjj%2Fbiome-config.svg)](https://www.npmjs.com/package/@penjj/biome-config) ![Build Status](https://github.com/penjj/workflows/actions/workflows/release.yml/badge.svg)

My personal biome config, line-width 80, single quote, no semicolons, two space indent.

## Install
```bash
pnpm install @biomejs/biome @penjj/biome-config -D
```

## Usage

```json5
// in your biome.json
{
  // ...
  "extends": "@penjj/biome-config"
}
```

```bash
pnpm biome --lint
```

## Code style
```ts
import { type Component, For, createSignal, onCleanup, onMount } from 'solid-js'

const normalizeTitle = (title: string) => title.slice(0, 4)

const BG_STYLE = 'light:bg-neutral-200 dark:bg-neutral-800'

export const Shortcuts: Component<{
  shortcuts: {
    slug: string
    text: string
  }[]
}> = (props) => {
  const [active, setActive] = createSignal()

  const hashListener = (e: HashChangeEvent) => {
    setActive(decodeURIComponent(e.newURL.split('#')[1]))
  }

  onMount(() => {
    window.addEventListener('hashchange', hashListener)
  })

  onCleanup(() => {
    window.removeEventListener('hashchange', hashListener)
  })

  return (
    <div position="sticky top-18 left-20" flex="~ items-center justify-center">
      <ul
        flex="~ gap-x-2"
        rounded-md
        p-1
        b-1
        light="bg-neutral-100 b-neutral-200"
        dark="bg-neutral-900 b-neutral-800"
      >
        <For each={props.shortcuts}>
          {item => (
            <li
              list-none
              text-sm
              p="x3 y1"
              rounded
              relative
              transition="colors"
              hover={BG_STYLE}
              before={`content-empty absolute top-50% translate-y--50% right--5px w-.5 h-3.2 rounded ${BG_STYLE}`}
              classList={{
                [BG_STYLE]: item.slug === active(),
              }}
            >
              <a href={`#${item.slug}`}>{normalizeTitle(item.text)}</a>
            </li>
          )}
        </For>
      </ul>
    </div>
  )
}

```

MIT License
