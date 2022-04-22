<script setup lang="ts">
import { ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const { theme } = useData()
const route = useRoute()
const link = theme.value.homeLinks.find((i) => i.default).link
const show = ref(route.path.match(link))

watch(route, () => (show.value = route.path.match(link)))

const playground = [
  { text: 'StackBlitz', link: 'https://stackblitz.com' },
  { text: 'Playground', link: 'https://sfc.vuejs.org' },
  { text: 'VueUse Playground', link: 'https://play.vueuse.org' },
  { text: 'Vue on CodeSandbox', link: 'https://codesandbox.io/s/vue-3' },
  { text: 'Vue on Codepen', link: 'https://codepen.io/pen/editor/vue' },
  { text: 'Vue on Components.studio', link: 'https://app.components.studio/create/vue3' },
  { text: 'Vue on WebComponents.dev', link: 'https://webcomponents.dev/create/cevue' },
  { text: 'Vue + Vite on Repl.it', link: 'https://replit.com/@replit/VueJS' }
]
</script>

<template>
  <div v-if="show" class="aside-mid">
    <div class="mt-12 mb-1 text-[12px] font-bold">在线 Playground</div>
    <a
      v-for="(item, index) in playground"
      :key="index"
      :href="item.link"
      class="block text-[13px] leading-[28px]"
      target="_blank"
      >{{ item.text }}</a
    >
  </div>
</template>

<style scoped>
.aside-mid a {
  color: var(--vt-c-text-2);
  transition: color 0.25s;
}
.aside-mid a:hover {
  color: var(--vt-c-text-1);
}
</style>
