# 自定义主题 Vue Theme

> 本站主题 Fork 自 [@vue/theme](https://github.com/vuejs/theme/)。该主题仅适用与 [Vue 官方文档](staging-cn.vuejs.org)，它不遵循 semver，并且可能包含特定于 Vue 文档的硬编码逻辑。<br/>
> 该主题不推荐直接使用，这里对该主题进行了部分修改以满足自定义需求。

## 使用方法

```
pnpm add @vue/theme -D
```

### vitepress 配置

```js
import baseConfig from '@vue/theme/config'

module.exports = {
  extends: baseConfig
}
```

## 自定义主题

### 引入组件

这里引入了自定义主题组件 CustomTheme，并将其传入主题插槽 banner 中。<br/>

```js
// .vitepress/theme/index.js
import { VPTheme } from '@vue/theme'
import { h } from 'vue'
import CustomTheme from './components/CustomTheme.vue'

export default {
   ...VPTheme,
  return h(VPTheme.Layout, null, {
    banner: () => h(CustomTheme)
  })
}
```

### 支持自定义配置

通过查看源码可知，主题的 logo 和 title 是写死且无法配置的。既然如此，我们可以使用最原始的方法，通过修改 `VPNavBarTitle` 节点元素的内容实现替换。通过 frontmatter 设置 `navbar: false` 可以隐藏 navbar。

```vue
// .vitepress/theme/components/CustomTheme.vue
<script setup>
import { onMounted, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const { site, theme, frontmatter } = useData()
const route = useRoute()

onMounted(() => {
  // 替换 logo 和 title
  const VPNavBarTitle = document.querySelectorAll('.VPNavBarTitle')[0]
  VPNavBarTitle.innerHTML = `<img class="logo" src="${theme.value.logo}" /><span class="text">${site.value.title}</span>`

  hideNavBar()
})

watch(route, () => hideNavBar())

// 隐藏导航栏
function hideNavBar() {
  const showNavBar = ref(frontmatter.value.navbar)
  const VPNav = document.querySelectorAll('.VPNav')[0]
  VPNav.setAttribute('style', showNavBar.value === false ? 'display: none;' : 'display: block')
}
</script>
```

::: tip
这样就可以通过修改配置实现了与 vitepress 默认主题一致的编码体验
:::
