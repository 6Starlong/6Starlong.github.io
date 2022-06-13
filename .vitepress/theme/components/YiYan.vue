<script setup>
import { ref, onMounted } from 'vue'
import { copyToClip } from '@theme/utils'

const yiyan = ref('')

onMounted(() => {
  fetch('https://v1.hitokoto.cn')
    .then((data) => data.json())
    .then((data) => (yiyan.value = data))
    .catch(console.error)
})
</script>

<template>
  <div
    class="app-yiyan"
    title="一言 点击复制"
    @click="copyToClip(`「 ${yiyan.hitokoto} 」 - ${yiyan.from}`)"
  >
    <p v-if="yiyan.hitokoto" class="yiyan-text">「 {{ yiyan.hitokoto }} 」</p>
    <p class="yiyan-from">- {{ yiyan.from }} -</p>
  </div>
</template>

<style scoped>
.app-yiyan {
  @apply mx-auto min-h-[36px] cursor-pointer;
  @apply text-center text-[13px];
}

.yiyan-text {
  @apply text-[1em];
}

.yiyan-from {
  @apply text-[0.9em] opacity-0 duration-300;
}

.app-yiyan:hover .yiyan-from {
  opacity: 1;
}
</style>
