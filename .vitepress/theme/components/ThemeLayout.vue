<script setup>
import ThemeSakura from './ThemeSakura.vue'

import { ref, watch, onMounted } from 'vue'
import { useData } from 'vitepress'
import { VPTheme } from '@vue/theme'

const { site, theme, page, frontmatter } = useData()
const { Layout } = VPTheme
const isDesktop = ref(false)

onMounted(() => {
  console.log("%cSᴛᴀʀʟᴏɴɢ💫's Blog\n心之所向，素履以往。", 'color:#00a5f2;line-height:24px;')
  console.log('%c用代码表达言语的魅力，\n用代码书写山河的壮丽。', 'color:#00a5f2;line-height:24px;')

  // 桌面端美化
  isDesktop.value = document.documentElement.classList.value.includes('desktop')
  if (isDesktop.value) {
    // 看板娘 初始化
    L2Dwidget.init({
      model: {
        // 使用 live2d-widget-model-violet 的模型
        jsonPath: 'https://unpkg.com/live2d-widget-model-violet@1.0.0/assets/14.json',
        scale: 1.5
      },
      display: { position: 'right', width: 240, height: 480, hOffset: 0, vOffset: -50 },
      mobile: { show: false }
    })
    L2Dwidget.on('*', (e, target) => {
      e === 'create-container' && (target.style.opacity = frontmatter.value.home ? 0 : 1)
    })

    watch(page, () => {
      document.querySelector('#live2d-widget').style.opacity = frontmatter.value.home ? 0 : 1
    })

    // 动态导入光标点击特效
    import('@/plugins/cursor-effects')

    // 禁用img标签的原生drag功能
    document.body.addEventListener('dragstart', (e) => {
      if (e.target.nodeName.toLowerCase() === 'img') {
        e.preventDefault()
      }
    })
  }
})
</script>

<template>
  <Layout>
    <!-- view more layout slots -->
    <!-- https://github.com/vuejs/theme/blob/main/src/vitepress/components/VPApp.vue -->

    <template #navbar-title>
      <img :src="theme.logo" class="mr-2 max-h-8 rounded-full" />
      <span class="text-base text-vt-1 font-medium">{{ site.title }}</span>
    </template>

    <template #content-bottom>
      <div class="content-bottom">
        <div
          v-if="page.lastUpdated && frontmatter.lastUpdated !== false"
          class="my-4 text-right text-sm text-vt-2"
        >
          最近更新时间：{{ new Date(page.lastUpdated).toLocaleString() }}
        </div>
        <YiYan class="absolute left-0 right-0 -bottom-20" />
      </div>
    </template>
  </Layout>

  <ThemeSakura v-if="isDesktop" />
</template>

<style>
@media screen and (max-width: 1280px) {
  #live2d-widget {
    opacity: 0 !important;
  }
}
</style>
