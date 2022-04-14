<template></template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const { site, theme, frontmatter } = useData()
const route = useRoute()

onMounted(() => {
  const VPNavBarTitle = document.querySelectorAll('.VPNavBarTitle')[0]
  VPNavBarTitle.innerHTML = `<img class="logo" src="${theme.value.logo}" /><span class="text">${site.value.title}</span>`

  hideNavBar()
})

watch(route, () => hideNavBar())

function hideNavBar() {
  const showNavBar = ref(frontmatter.value.navbar)
  const VPNav = document.querySelectorAll('.VPNav')[0]
  VPNav.setAttribute('style', showNavBar.value === false ? 'display: none;' : 'display: block')
}
</script>

<style>
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
