---
outline: deep
---

# VitePress

- [文档](https://vitepress.vuejs.org/)
- [Github](https://github.com/vuejs/vitepress)
- [VuePress](https://v2.vuepress.vuejs.org/zh/guide/)

## 配置 {#config}

### 配置文件 {#config-file}

VitePress 站点的基本配置文件是 `.vitepress/config.js `，基础的配置文件是这样的：

```js
module.exports = {
  lang: 'zh-CN',
  title: 'Hello Vitepress',
  description: '这是一个 Vitepress 站点'
}
```

::: tip
目前 VitePress 包含的所有配置可以查看 [config.ts](https://github.com/vuejs/vitepress/blob/main/src/node/config.ts)
:::

## 在 Markdown 中使用 Vue {#using-vue}

### 浏览器 API 访问限制 {#browser-api-access-restrictions}

由于 VitePress 应用程序在生成静态构建时在 Node.js 中进行服务器渲染，因此任何 Vue 使用都必须符合[通用代码要求](https://staging-cn.vuejs.org/guide/scaling-up/ssr.html)。简而言之，确保只在 `beforeMount` 或 `mounted` 钩子中访问浏览器 /DOM API。

如果您正在使用或演示对 SSR 不友好的组件（例如，包含自定义指令），您可以将它们包装在内置 `<ClientOnly>` 组件中：

```vue-html
<ClientOnly>
    <NonSSRFriendlyComponent />
</ClientOnly>
```

请注意，这不会修复在导入时访问浏览器 API 的组件或库。要在导入时使用假定浏览器环境的代码，您需要在适当的生命周期挂钩中动态导入它们：

```vue
<script>
export default {
  mounted() {
    import('./lib-that-access-window-on-import').then((module) => {
      // use code
    })
  }
}
</script>
```

如果你的模块 export default 是一个 Vue 组件，你可以动态注册它：

```vue
<template>
  <component v-if="dynamicComponent" :is="dynamicComponent"></component>
</template>

<script>
export default {
  data() {
    return {
      dynamicComponent: null
    }
  },

  mounted() {
    import('./lib-that-access-window-on-import').then((module) => {
      this.dynamicComponent = module.default
    })
  }
}
</script>
```

## 主题化 {#theming}

### 使用自定义主题 {#use-custom-theme}

可以通过添加文件 `.vitepress/theme/index.js` 来启用自定义主题

```sh
.
│  .vitepress
│  ├─ theme
│  │  └─ index.js
│  └─ config.js
└─ index.md
```

VitePress 自定义主题只是一个包含三个属性的对象，定义如下：

```ts
interface Theme {
  Layout: Component // Vue 3 component
  NotFound?: Component
  enhanceApp?: (ctx: EnhanceAppContext) => void
}

interface EnhanceAppContext {
  app: App // Vue 3 app instance
  router: Router // VitePress router instance
  siteData: Ref<SiteData>
}
```

主题条目文件应将主题为其默认导出：

```js
// .vitepress/theme/index.js
import Layout from './Layout.vue'

export default {
  Layout,
  NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData` is a `ref` of current site-level metadata.
  }
}
```

### 扩展默认主题 {#extend-default-theme}

#### 注册全局组件 {#register-global-components}

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component('MyGlobalComponent' /* ... */)
  }
}
```

由于我们使用的是 vite，可以通过 vite 的 [glob 导入功能](https://cn.vitejs.dev/guide/features.html#glob-import)来自动注册组件

### 自定义 css {#custom-css}

默认主题 CSS 可通过覆盖根级 CSS 变量进行自定义：

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
```

```css
/* .vitepress/theme/custom.css */
:root {
  --c-brand: #646cff;
  --c-brand-light: #747bff;
}
```

查看可以被覆盖的[默认主题 CSS 变量](https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css)。

#### 布局插槽 {#layout-slots}

默认主题的 `<Layout/>` 组件包含一些插槽，可在页面的某些位置注入内容。这是将组件注入的示例：

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import ThemeLayout from './components/ThemeLayout.vue'

export default {
  ...DefaultTheme,
  // 使用注入插槽的包装器组件覆盖 DefaultTheme 的 Layout 组件
  Layout: ThemeLayout
}
```

```vue
<!--.vitepress/theme/components/ThemeLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #navbar-search>My custom content</template>
    <template #sidebar-top>My custom content</template>
    <template #sidebar-bottom>My custom content</template>
    <template #page-top-ads>My custom content</template>
    <template #page-top>My custom content</template>
    <template #page-bottom>My custom content</template>
    <template #page-bottom-ads>My custom content</template>
    <!-- 以下插槽仅当 home: true 通过 frontmatter 启用 -->
    <template #home-hero>My custom content</template>
    <template #home-features>My custom content</template>
    <template #home-footer>My custom content</template>
  </Layout>
</template>
```

也可以通过渲染函数挂载：

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // uncomment to test layout slots
      // 'page-top': () => h('div', 'hello top'),
      // 'page-bottom': () => h(Component)
      // ...
    })
  }
}
```
