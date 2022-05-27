<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
const VPNav = ref('')
const heroHeight = ref(0)
const scrollTop = ref(0)

watch(scrollTop, (scrollTop) => {
  if (scrollTop > heroHeight.value) {
    VPNav.value.classList.remove('nav-cover')
  } else {
    VPNav.value.classList.add('nav-cover')
  }
})

onMounted(() => {
  VPNav.value = document.querySelector('.VPNav')
  VPNav.value.classList.add('nav-cover')
  heroHeight.value = document.querySelector('#hero').offsetHeight - 55

  window.addEventListener('scroll', () => {
    scrollTop.value = document.documentElement.scrollTop || document.body.scrollTop
  })
})

onUnmounted(() => {
  VPNav.value.classList.remove('nav-cover')
})
</script>

<template>
  <header id="hero">
    <div class="relative z-10 text-white text-center">
      <h2 class="text-[2.4em] leading-snug font-bold">{{ frontmatter.heroText }}</h2>
      <p class="tracking-[3.8px]">{{ frontmatter.tagline }}</p>
      <p class="text-sm leading-8 tracking-[1px]">☕ This site is built with VitePress 🛠️</p>
      <p class="my-[10px] leading-3 tracking-[9px]">******</p>
      <YiYan />
    </div>
  </header>
</template>

<style scoped>
#hero {
  @apply relative flex justify-center items-center bg-cover bg-center;
  min-height: 75vh;
  font-family: 'Quicksand', sans-serif;
  background-image: url('https://w.wallhaven.cc/full/6o/wallhaven-6ozkzl.jpg');
}

#hero::before {
  @apply absolute top-0 left-0 w-full h-full;
  content: '';
  background-color: rgba(255, 255, 255, 0.1);
}

.dark #hero::before {
  background-color: rgba(26, 26, 26, 0.1);
}
</style>

<style>
@screen md {
  #hero {
    margin-top: -55px;
  }

  .nav-cover {
    --vt-c-bg: transparent;
    --vt-c-divider-light: transparent;
    --vt-c-text-1: var(--vt-c-text-dark-1);
    --vt-c-text-2: var(--vt-c-text-dark-2);
    --vt-c-text-3: var(--vt-c-text-dark-3);
  }

  .nav-cover .vt-menu {
    --vt-c-bg: var(--vt-c-white);
    --vt-c-divider-light: var(--vt-c-divider-dark-2);
    --vt-c-text-1: var(--vt-c-text-1);
    --vt-c-text-2: var(--vt-c-text-2);
  }

  .nav-cover .vt-switch-icon svg {
    --vt-c-text-2: var(--vt-c-text-light-2);
  }

  .dark .nav-cover .vt-menu {
    --vt-c-bg: var(--vt-c-black);
  }
}
</style>
