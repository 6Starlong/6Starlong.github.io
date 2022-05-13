# 配置主题 {#configure-the-theme}

参考文档：https://vitepress.vuejs.org/guide/theming.html

## 使用自定义主题 {#use-custom-theme}

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

## 扩展默认主题 {#extend-default-theme}

### 注册全局组件 {#register-global-components}

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

### 布局插槽 {#layout-slots}

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

## 使用 Vue 3 文档主题 {#use-vue3-theme}

> 本站主题 Fork 自 [@vue/theme](https://github.com/vuejs/theme/)。该主题仅适用与 [Vue 官方文档](https://staging-cn.vuejs.org)，它不遵循 semver，并且可能包含特定于 Vue 文档的硬编码逻辑。<br/>
> 该主题不推荐直接使用，这里对该主题进行了部分修改以满足自定义需求。

### 使用方法 {#guide}

```sh
pnpm add @vue/theme
```

```js{6}
// .vitepress/config.js
import { defineConfig } from 'vitepress'
import baseConfig from '@vue/theme/config'

export default defineConfig({
  extends: baseConfig
  // ...
})
```

```js
// .vitepress/theme/index.js
import { VPTheme } from '@vue/theme'
import ThemeLayout from './components/ThemeLayout.vue'

export default {
  ...VPTheme,
  Layout: ThemeLayout
}
```

### 自定义主题 {#custom-theme}

通过查看源码可知，主题的 logo 和 title 是写死且无法配置的。既然如此，我们在 ThemeLayout 组件中通过修改 `NavBarTitle` 节点元素的内容，并使用配置文件中的值进行替换。

1. 操作 dom

```vue{7,13-15,18,19}
<script setup>
import { onMounted } from 'vue'
import { useData } from 'vitepress'
import { VPTheme } from '@vue/theme'

// 引入自定义  NavBarTitle 组件
import NavBarTitle from './NavBarTitle.vue'

const { Layout } = VPTheme
const { site, theme } = useData()

onMounted(() => {
  // document.querySelector('.VPNavBarTitle').innerHTML = `
  // <img class="logo" src="${theme.value.logo}" />
  // <span class="text">${site.value.title}</span>`

  // 创建虚拟 dom 并挂载到 VPNavBarTitle 元素节点上
  const app = createApp(NavBarTitle, { logo: theme.value.logo, title: site.value.title })
  app.mount(document.querySelector('.VPNavBarTitle'))
})
</script>

<template>
  <Layout> </Layout>
</template>
```

2. 通过 style (不推荐)

```vue{12,13,17,18,28,43,48,49}
<script setup>
import { onMounted } from 'vue'
import { useData } from 'vitepress'
import { VPTheme } from '@vue/theme'

const { Layout } = VPTheme
const { site, theme } = useData()

// 1.通过设置 attribute，并在 style 中使用 attr 引入
onMounted(() => {
  const VPNavBarTitle = document.querySelector('.VPNavBarTitle')
  // VPNavBarTitle.setAttribute('style', `background-image: url("${theme.value.logo}")`)
  // VPNavBarTitle.setAttribute('data-after', site.value.title)
})

// 2.通过 v-bind in css
const logo = theme.value.logo
const title = site.value.title
</script>

<template>
  <Layout> </Layout>
</template>

<style>
.VPNavBarTitle .logo,
.VPNavBarTitle .text {
  display: none;
}

.VPNavBarTitle {
  width: 150px;
  /* background-size: 2rem;
  background-repeat: no-repeat;
  background-position: left; */
}

.VPNavBarTitle::before {
  content: '';
  position: absolute;
  width: 2rem;
  height: 2rem;
  background-image: v-bind(`url('${logo}') `);
  background-size: cover;
}

.VPNavBarTitle::after {
  /* content: attr(data-after); */
  content: v-bind(` '${title}' `);
  position: absolute;
  margin-left: 40px;
  font-size: 16px;
  font-weight: 500;
}
</style>
```
