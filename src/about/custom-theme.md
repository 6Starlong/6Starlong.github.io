# 自定义主题 Vue Theme

> 本站主题 Fork 自 [@vue/theme](https://github.com/vuejs/theme/)。该主题仅适用与 [Vue 官方文档](staging-cn.vuejs.org)，它不遵循 semver，并且可能包含特定于 Vue 文档的硬编码逻辑。<br/>
> 这里对该主题的源文件进行了特定的修改以满足自定义需求。

## VPNavBar.vue

> VPTheme/vitepress/components/VPNavBar.vue

```vue {3,4,8,9}
<script lang="ts" setup>
...
+ import { useData } from 'vitepress'
+ const { frontmatter } = useData()
</script>

<template>
- <header class="VPNav nav-bar" :class="{ stick: !hasSidebar }">
+ <header class="VPNav nav-bar" :class="{ stick: !hasSidebar }" v-if="frontmatter.navbar !== false">
    <VPNavBar :is-screen-open="isScreenOpen" @toggle-screen="toggleScreen" />
    <VPNavScreen :open="isScreenOpen" />
  </header>
</template>
```

## VPNavBarTitle.vue

> VPTheme/vitepress/components/VPNavBarTitle.vue

```vue {1-4,8,9,13-15,23}
+ <script lang="ts" setup>
+   import { useData } from 'vitepress'
+   const { site, theme } = useData()
+ </script>

<template>
  <a class="VPNavBarTitle" href="/">
-   <svg class="logo" viewBox="0 0 128 128" width="24" height="24">
+   <svg class="logo" viewBox="0 0 128 128" width="24" height="24" v-if="!theme.logo">
      <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z" />
      <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" />
    </svg>
+   <img class="logo" :src="theme.logo" alt="logo" v-else />
_   <span class="text">Vue.js</span>
+   <span class="text">{{ site.title }}</span>
  </a>
</template>

<style scoped>
...
.logo {
  position: relative;
+ max-height: 2rem;
}
...
</style>
```
