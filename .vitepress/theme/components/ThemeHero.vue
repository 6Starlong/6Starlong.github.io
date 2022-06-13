<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'
import { toggleNavBarClass } from '@theme/utils'

const { frontmatter } = useData()
const { openScrollEvent, closeScrollEvent } = toggleNavBarClass()

const hero = $ref()
onMounted(() => {
  const navbar = document.querySelector('.VPNavBar')
  const heroHeight = hero.offsetHeight
  openScrollEvent({
    element: navbar,
    className: 'nav-cover',
    offset: heroHeight / 2,
    scrollFunc: (scrollTop) => {
      hero.style.transform = `translateY(${~~((scrollTop / 99) * 33)}px)`
    }
  })
  onUnmounted(() => closeScrollEvent())
})
</script>

<template>
  <header id="hero" ref="hero">
    <div class="container relative z-10 text-white text-center translate-y-[-25px]">
      <h2 class="text-4xl font-bold font-Roboto tracking-tight">{{ frontmatter.heroText }}</h2>
      <YiYan class="mt-2 mb-6 !text-lg" />
      <div class="actions">
        <a href="/frontend/notes/"> Blog </a>
        <a href="https://github.com/6starlong" target="_black"> Github </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_black"> Live </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
#hero {
  @apply relative min-h-[90vh] grid content-center;
}

#hero::before {
  @apply content-[''] absolute inset-0 bg-cover bg-center opacity-90;
  background-image: url('https://w.wallhaven.cc/full/6o/wallhaven-6ozkzl.jpg');
}

.actions a {
  @apply inline-block mx-2 py-2 px-6 text-vt-code font-medium shadow-sm;
  @apply rounded-lg bg-vt-mute hover:bg-[color:var(--vt-c-gray-light-4)];
  @apply duration-500 last:text-white last:bg-vt-green;
  @apply last:hover:!bg-vt-green-dark;
}

.dark .actions a {
  @apply hover:bg-[color:var(--vt-c-gray-dark-3)];
  @apply last:!text-[color:var(--vt-c-indigo)];
  @apply last:hover:!bg-vt-green-light;
}
</style>

<style>
@screen md {
  #hero {
    @apply -mt-[var(--vt-nav-height)];
  }

  .nav-cover {
    @apply !shadow-none;
    --vt-c-bg: transparent;
    --vt-c-text-1: var(--vt-c-text-dark-1);
    --vt-c-text-2: var(--vt-c-text-dark-2);
  }

  .nav-cover .vt-menu {
    --vt-c-bg: var(--vt-c-white);
    --vt-c-text-1: var(--vt-c-text-light-1);
    --vt-c-text-2: var(--vt-c-text-light-2);
  }

  .dark .nav-cover .vt-menu {
    --vt-c-bg: var(--vt-c-black);
    --vt-c-text-1: var(--vt-c-text-dark-1);
    --vt-c-text-2: var(--vt-c-text-dark-2);
  }

  .nav-cover .vt-switch-icon svg {
    --vt-c-text-2: var(--vt-c-text-light-1);
  }
}
</style>
