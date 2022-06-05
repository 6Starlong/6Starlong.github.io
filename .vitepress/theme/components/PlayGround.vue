<script setup lang="ts">
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
  <div class="aside-mid">
    <div class="mt-12 mb-1 text-xs font-bold">在线 Playground</div>
    <a
      v-for="(item, index) in playground"
      :key="index"
      class="block text-[13px] leading-7 text-vt-2 hover:text-vt-1 duration-500"
      :href="item.link"
      target="_blank"
      >{{ item.text }}
    </a>
  </div>
</template>
