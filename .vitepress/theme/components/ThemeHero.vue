<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
const VPNav = ref('')
const heroHeight = ref(0)
const scrollTop = ref(0)

onMounted(() => {
  VPNav.value = document.querySelector('.VPNav')
  VPNav.value.classList.add('nav-cover')
  heroHeight.value = document.querySelector('#hero').offsetHeight - 55

  window.addEventListener('scroll', () => {
    scrollTop.value = document.documentElement.scrollTop || document.body.scrollTop
  })

  watch(scrollTop, (scrollTop) => {
    if (scrollTop > heroHeight.value) {
      VPNav.value.classList.remove('nav-cover')
    } else {
      VPNav.value.classList.add('nav-cover')
    }
  })
})

onUnmounted(() => {
  VPNav.value.classList.remove('nav-cover')
})
</script>

<template>
  <header id="hero">
    <div class="relative z-10 font-quicksand text-center text-white">
      <h2 class="text-4xl leading-snug">{{ frontmatter.heroText }}</h2>
      <p class="tracking-[3.8px]">{{ frontmatter.tagline }}</p>
      <p class="text-sm leading-8 tracking-[1.25px]">☕ This site is built with VitePress 🛠️</p>
      <p class="my-2 leading-3 tracking-[9px]">******</p>
      <YiYan />
    </div>
  </header>
</template>

<style scoped>
#hero {
  @apply relative min-h-[75vh] grid content-center;
}

#hero::before {
  @apply content-[''] absolute inset-0 bg-cover bg-center opacity-90;
  background-image: url('https://w.wallhaven.cc/full/6o/wallhaven-6ozkzl.jpg');
}
</style>

<style>
@screen md {
  #hero {
    @apply -mt-[var(--vt-nav-height)];
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
