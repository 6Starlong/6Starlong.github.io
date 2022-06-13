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
    window.innerHeight * 0.8 - (window.innerWidth > 960 ? 55 : window.innerWidth > 768 ? 0 : -55)
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
  <main class="main">
    <div class="max-w-screen-lg mx-auto">
      <h1 class="blog-title">Posts</h1>
      <div class="posts-box">
        <div
          v-for="(item, index) in postsList"
          :key="index"
          class="posts-card"
          @click="goPosts(item)"
        >
          <figure class="figure">
            <img v-if="item.img" :src="item.img" class="w-full object-cover" />
          </figure>
          <div class="pt-3">
            <h2>{{ item.text }}</h2>
            <div class="flex items-center text-vt-2 text-xs font-medium leading-[25px]">
              <div class="flex items-center duration-150 hover:translate-y-[-5px]">
                <img src="/avatar.png" class="w-[25px] h-[25px] rounded-full" />
                <span class="ml-1 underline">Starlong</span>
              </div>
              <span class="mx-2">·</span>
              <span v-if="item.lastUpdated">
                {{ new Date(item.lastUpdated).toLocaleString() }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-[80px] flex justify-between font-Georgia tracking-tight">
        <div>
          <button v-if="currPage !== 1" @click="currPage--">← Newer Posts</button>
        </div>
        <div>
          <button v-if="currPage * pageNum < total" @click="currPage++">Older Posts →</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  @apply relative z-10 bg-vt rounded-md shadow-lg;
  @apply -mt-16 mx-8 mb-24 py-20 px-12;
}

.posts-box {
  @apply grid gap-8 grid-cols-1;
  @apply md:grid-cols-2 lg:grid-cols-3;
}

.posts-card {
  @apply relative rounded-lg cursor-pointer;
}

.posts-card .figure {
  @apply rounded-lg overflow-hidden shadow-sm;
  @apply duration-150 hover:translate-y-[-5px];
}

.posts-card h2 {
  @apply relative mb-3 text-2xl text-vt-1 font-bold hover:before:h-2;
}

.posts-card h2::before {
  @apply content-[''] absolute left-0 right-0 bottom-0 -z-10;
  @apply h-0 bg-vt-brand duration-200;
}

button {
  @apply text-sm text-vt-1 tracking-[2px] font-black;
  @apply border-b border-solid duration-[250ms];
  @apply hover:text-vt-2 hover:border-b-vt-2;
}
</style>
