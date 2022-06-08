<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vitepress'
import { filterPosts } from '@theme/utils'

const router = useRouter()
const { pageNum, total, posts } = filterPosts()
const postsList = ref(posts)
const currPage = ref(1)

watch(currPage, () => {
  postsList.value = filterPosts(currPage.value).posts
  window.scrollTo(
    0,
    window.innerHeight * 0.75 - (window.innerWidth > 960 ? 56 : window.innerWidth > 768 ? 0 : -55)
  )
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
  <h1 class="blog-title">Posts</h1>
  <div class="px-9 md:p-0">
    <div class="posts-box">
      <div
        v-for="(item, index) in postsList"
        :key="index"
        class="posts-card"
        @click="goPosts(item)"
      >
        <figure class="mb-5 h-[200px] xl:h-[270px]">
          <img v-if="item.img" :src="item.img" class="w-full h-full object-cover" />
        </figure>
        <div class="px-4">
          <h2>{{ item.text }}</h2>
          <time class="text-sm text-[#a29a90]">
            {{ item.lastUpdated ? new Date(item.lastUpdated).toLocaleString() : null }}
          </time>
        </div>
      </div>
    </div>

    <div class="flex justify-between font-quicksand">
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
.posts-box {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
  @apply mb-6 md:mb-12 gap-4 md:gap-6 lg:gap-8;
}

.posts-card {
  @apply pb-5 overflow-hidden cursor-pointer;
  @apply rounded-lg bg-vt-bg-soft shadow-3;
  @apply duration-150 hover:translate-y-[-20px];
}

.posts-card h2 {
  @apply relative mb-3 text-2xl font-bold;
  @apply hover:before:h-2;
}

.posts-card h2::before {
  @apply content-[''] absolute left-0 right-0 bottom-0 -z-10;
  @apply h-0 bg-vt-brand duration-200 hover:h-2;
}

button {
  @apply text-sm text-vt-1 tracking-[2px] font-black;
  @apply border-b border-solid duration-[250ms];
  @apply hover:text-vt-2 hover:border-b-vt-2;
}
</style>
