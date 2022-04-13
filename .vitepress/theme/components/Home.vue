<script setup>
import { useData } from 'vitepress'
const { theme, frontmatter } = useData()
</script>

<template>
  <div id="hero">
    <img
      class="inline-block max-h-[200px]"
      :src="frontmatter.heroImage || theme.logo"
      v-if="frontmatter.heroImage || theme.logo"
    />
    <h1 class="mt-8 leading-none font-bold text-[4.5em]">Hello</h1>
    <h2 class="mt-3 mb-1 leading-snug text-[1.6em]">{{ frontmatter.heroText }}</h2>
    <p class="tracking-[0.25em]">{{ frontmatter.tagline }}</p>
    <div class="my-8 text-4xl">
      <template v-if="theme.socialLinks">
        <a :href="theme.socialLinks[0].link" target="_black" class="inline-block mx-5">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-github"></use>
          </svg>
        </a>
      </template>
      <template v-if="theme.nav">
        <a href="/frontend/" class="inline-block mx-5">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-blog"></use>
          </svg>
        </a>
      </template>
    </div>
    <p class="leading-8 tracking-[9px]">******</p>
    <p>☕ This site is built with VitePress 🛠️</p>
  </div>
</template>

<style scoped>
@media (min-width: 960px) {
  /* --vt-nav-height: 55px; */
  #hero {
    margin-top: -55px;
  }
}

#hero {
  padding: 18vh 32px 96px;
  min-height: 100vh;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
}

#hero h1 {
  font-synthesis: weight style small-caps;
}

#hero a:nth-of-type(2) {
  color: var(--vt-c-green);
}
</style>
