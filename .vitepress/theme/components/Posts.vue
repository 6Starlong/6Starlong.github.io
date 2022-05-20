<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vitepress'
import { filterPosts } from '@/utils'

const router = useRouter()
const { pageNum, total, posts } = filterPosts()
const postsList = ref(posts)
const currPage = ref(1)

watch(currPage, () => {
  postsList.value = filterPosts(currPage.value).posts
  window.scrollTo(0, window.innerHeight - (window.innerWidth > 960 ? 55 : 0))
})

onMounted(() => {
  // 判断是否从上一页返回
  if (window.history.state) {
    currPage.value = Number(sessionStorage.getItem('page') || 1)
  }
})

function goPosts(item) {
  sessionStorage.setItem('page', currPage.value)
  router.go(item.link)
}
</script>

<template>
  <div class="w-full">
    <div v-for="(item, index) in postsList" :key="index" @click="goPosts(item)" class="posts">
      <div>{{ item.text }}</div>
      <div class="mt-[20px] flex justify-between">
        <span class="text-xs">{{ new Date(item.lastUpdated).toLocaleString() }}</span>
      </div>
    </div>
    <div class="flex justify-between">
      <div>
        <button v-if="currPage !== 1" @click="currPage--">← Newer Posts</button>
      </div>
      <div>
        <button v-if="currPage * pageNum < total" @click="currPage++">Older Posts →</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.posts {
  @apply mb-[40px] p-8 w-full rounded-lg cursor-pointer;
  background-color: var(--vt-c-bg-soft);
}
</style>
