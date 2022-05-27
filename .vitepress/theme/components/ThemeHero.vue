<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
const scrollTop = ref(0)
const heroHeight = ref(0)

watch(scrollTop, (scrollTop) => {
  if (scrollTop > heroHeight.value) {
    document.querySelector('.VPNavBar').classList.remove('transparent')
  } else {
    document.querySelector('.VPNavBar').classList.add('transparent')
  }
})

onMounted(() => {
  document.querySelector('.VPNavBar').classList.add('transparent')
  heroHeight.value = document.querySelector('#hero').offsetHeight - 55

  window.addEventListener('scroll', () => {
    scrollTop.value = document.documentElement.scrollTop || document.body.scrollTop
  })
})

onUnmounted(() => {
  document.querySelector('.VPNavBar').classList.remove('transparent')
})
</script>

<template>
  <header id="hero">
    <h2 class="text-[2.4em] leading-snug font-bold">{{ frontmatter.heroText }}</h2>
    <p class="tracking-[3.6px]">{{ frontmatter.tagline }}</p>
    <p class="text-sm leading-8 tracking-[1.8px]">☕ This site is built with VitePress 🛠️</p>
    <p class="my-[10px] leading-3 tracking-[9px]">******</p>
    <YiYan />
  </header>
</template>

<style>
.VPNav .VPNavBar {
  transition: background-color 0.5s !important;
}
.VPNav .transparent {
  background: transparent !important;
  border: none !important;
}
</style>

<style scoped>
#hero {
  @apply relative z-[1] flex flex-col justify-center items-center;
  min-height: 75vh;
  font-family: 'Quicksand', sans-serif;
}

@screen md {
  #hero {
    margin-top: -55px;
  }
}

#hero::before {
  @apply absolute top-0 left-0 w-full h-full opacity-60 bg-cover bg-center;
  content: '';
  z-index: -1; /*放在内容背后*/
  background-image: url('https://w.wallhaven.cc/full/6o/wallhaven-6ozkzl.jpg');
}
</style>
