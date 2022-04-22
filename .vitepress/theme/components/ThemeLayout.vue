<template>
  <Layout>
    <!-- uncomment to test layout slots -->
    <!-- <template #banner> </template> -->
    <!-- <template #sidebar-top> hello top </template> -->
    <!-- <template #sidebar-bottom> hello bottom </template> -->
    <!-- <template #content-top> Announcement! </template> -->
    <!-- <template #content-bottom> Some ads </template> -->
    <!-- <template #aside-top> this could be huge </template> -->
    <!-- <template #aside-mid> Sponsors </template> -->
    <!-- <template #aside-bottom> Sponsors </template> -->
    <template #aside-mid> <PlayGround /> </template>
  </Layout>
</template>

<script setup>
import { onMounted, createApp } from 'vue'
import { useData } from 'vitepress'
import { VPTheme } from '@vue/theme'

const { Layout } = VPTheme
import NavBarTitle from './NavBarTitle.vue'
import PlayGround from './PlayGround.vue'

const { site, theme } = useData()

onMounted(() => {
  const app = createApp(NavBarTitle, { logo: theme.value.logo, title: site.value.title })
  app.mount(document.querySelector('.VPNavBarTitle'))
})
</script>

<style scoped>
.VPApp {
  font-synthesis: weight style small-caps;
}
</style>
