<script setup>
import NavBarTitle from './NavBarTitle.vue'
import PlayGround from './PlayGround.vue'

import { createApp, watch, onMounted } from 'vue'
import { useData } from 'vitepress'
import { VPTheme } from '@vue/theme'

const { site, theme, page, frontmatter } = useData()
const { Layout } = VPTheme

watch(page, () => {
  document.querySelector('#live2d-widget').style.opacity = frontmatter.value.home ? 0 : 1
})

onMounted(() => {
  // 挂载 NavBarTitle 组件
  const app = createApp(NavBarTitle, { logo: theme.value.logo, title: site.value.title })
  app.mount(document.querySelector('.VPNavBarTitle'))
  // 看板娘 初始化
  L2Dwidget.init({
    model: {
      // 使用 live2d-widget-model-violet 的模型
      jsonPath: 'https://unpkg.com/live2d-widget-model-violet@1.0.0/assets/14.json',
      scale: 1.5
    },
    display: { position: 'left', width: 240, height: 480, hOffset: 50, vOffset: -50 },
    mobile: { show: false }
  })
  L2Dwidget.on('*', (e, target) => {
    e === 'create-container' && (target.style.opacity = frontmatter.value.home ? 0 : 1)
  })
})
</script>

<template>
  <Layout>
    <!-- uncomment to test layout slots -->
    <!-- <template #banner> </template> -->
    <!-- <template #sidebar-top> hello top </template> -->
    <!-- <template #sidebar-bottom> hello bottom </template> -->
    <!-- <template #content-top> Announcement! </template> -->
    <!-- <template #content-bottom> Some ads </template> -->
    <!-- <template #aside-top> this could be huge </template> -->
    <!-- <template #aside-mid> Sponsors </template> -->
    <!-- <template #aside-bottom> Sponsors </template> -->
    <template #aside-mid> <PlayGround /> </template>
  </Layout>
</template>

<style scoped>
.VPApp {
  font-synthesis: weight style small-caps;
}
</style>
