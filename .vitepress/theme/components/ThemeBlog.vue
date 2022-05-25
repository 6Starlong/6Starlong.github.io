<script setup>
import ThemePosts from './ThemePosts.vue'
</script>

<template>
  <main class="blog">
    <ThemePosts />
  </main>
</template>

<style scoped>
.blog {
  @apply mx-auto max-w-[960px] py-[50px];
}
</style>
