<script setup>
import { useData } from 'vitepress'
const { theme, frontmatter } = useData()
</script>

<template>
  <div id="hero">
    <img
      v-if="frontmatter.heroImage || theme.logo"
      class="inline-block h-[200px]"
      :src="frontmatter.heroImage || theme.logo"
    />
    <h1 class="mt-8 leading-none font-bold text-[4.5em]">Hello</h1>
    <h2 class="mt-3 mb-1 leading-snug text-[1.6em]">
      {{ frontmatter.heroText }}
    </h2>
    <p class="tracking-[0.25em]">{{ frontmatter.tagline }}</p>
    <div class="my-8 text-4xl">
      <template v-if="theme.homeLinks">
        <template v-for="(item, index) in theme.homeLinks" :key="index">
          <a :href="item.link" class="inline-block mx-5" target="_black">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="`#icon-${item.icon}`"></use>
            </svg>
          </a>
        </template>
      </template>
    </div>
    <p class="leading-8 tracking-[9px]">******</p>
    <p>☕ This site is built with VitePress 🛠️</p>
    <YiYan />
  </div>
</template>

<style scoped>
/* --vt-nav-height: 55px; */
#hero {
  position: relative;
  z-index: 1;
  padding: 18vh 32px 96px;
  min-height: calc(100vh - 55px);
  text-align: center;
  font-family: 'Quicksand', sans-serif;
}

#hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; /*放在内容背后*/
  width: 100%;
  height: 100%;
  background: url('https://w.wallhaven.cc/full/6o/wallhaven-6ozkzl.jpg');
  background-size: cover;
  opacity: 0.5;
}

#hero a:nth-of-type(2) {
  color: var(--vt-c-green);
}
</style>
