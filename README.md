# use-window-resize
![npm (tag)](https://img.shields.io/npm/v/@mahdikhashan/use-window-resize/latest?style=plastic)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@mahdikhashan/use-window-resize)
![npm](https://img.shields.io/npm/dy/@mahdikhashan/vue3-click-outside)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/@mahdikhashan/use-window-resize/peer/vue)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/mahdikhashan/use-window-resize)
![NPM](https://img.shields.io/npm/l/@mahdikhashan/use-window-resize)

## Directive for Vue 3 to run a method on clicking outside of the binded element


--- 

## Demo

[Demo](https://codesandbox.io/s/use-window-resize-x6keg0)


## Installation

```
npm install --save @mahdikhashan/use-window-resize
```

## How to use
add the custom directive to you component

```
<template>
  <div class="main">
    Page width {{ width }} and height {{ height }}
  </div>
</template>

<script setup>
import { useWindowResize } from '@mahdikhashan/use-window-resize'

const { width, height } = useWindowResize(1)

</script>
```

## Contributing

If you want to contribute to this project simply fork it and clone it then run
`npm i`
in the root of the project, then run
`npm run start`
to run development server.

### Licence and cast

MIT Licence

by [Mahdi Khashan](https://www.linkedin.com/in/mahdi-khashan-ir/)