<script lang="ts" setup>
import { useData } from 'vitepress'
const { site, theme } = useData()
</script>

<template>
  <a class="VPNavBarTitle" href="/">
    <svg class="logo" viewBox="0 0 128 128" width="24" height="24" v-if="!theme.logo">
      <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z" />
      <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" />
    </svg>
    <img class="logo" :src="theme.logo" alt="logo" v-else />
    <span class="text">{{ site.title }}</span>
  </a>
</template>

<style scoped>
.VPNavBarTitle {
  display: flex;
  align-items: center;
  padding-top: 1px;
  height: var(--vt-nav-height);
  transition: opacity 0.25s;
}

.VPNavBarTitle:hover {
  opacity: 0.6;
}

.logo {
  position: relative;
  max-height: 2rem;
}

.logo + .text {
  padding-left: 8px;
}

.text {
  font-size: 16px;
  font-weight: 500;
}
</style>
