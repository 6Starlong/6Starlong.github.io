<script setup lang="ts">
import { useNav } from '../composables/nav'
import { useSidebar } from '../composables/sidebar'
import VPNavBar from './VPNavBar.vue'
import VPNavScreen from './VPNavScreen.vue'
import { provide } from 'vue'
import { useData } from 'vitepress'

const { isScreenOpen, closeScreen, toggleScreen } = useNav()
const { hasSidebar } = useSidebar()
const { frontmatter } = useData()

provide('close-screen', closeScreen)
</script>

<template>
  <header class="VPNav nav-bar" :class="{ stick: !hasSidebar }" v-if="frontmatter.navbar !== false">
    <VPNavBar :is-screen-open="isScreenOpen" @toggle-screen="toggleScreen" />
    <VPNavScreen :open="isScreenOpen" />
  </header>
</template>

<style scoped>
.VPNav {
  position: relative;
  top: 0;
  left: 0;
  z-index: var(--vp-z-index-nav);
}

@media (min-width: 960px) {
  .VPNav {
    position: fixed;
    top: var(--vt-banner-height, 0px);
    width: 100%;
  }
}
</style>
