<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import { onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme

// https://vitepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions
// 由于 VitePress 应用程序在生成静态构建时在 Node.js 中进行服务器渲染，只能在beforeMount或mounted钩子中访问浏览器/DOM API。
onMounted(() => {
  // 引入 alicdn-iconfont
  import(
    'https://at.alicdn.com/t/font_2779014_a932u7n2hl.js?spm=a313x.7781069.1998910419.88&file=font_2779014_a932u7n2hl.js'
  )
})
</script>

<template>
  <Layout> <Content /> </Layout>
</template>
