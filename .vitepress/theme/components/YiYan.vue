<script setup>
import { ref, onMounted } from 'vue'
import { copyToClip } from '@/utils'

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
  @apply mx-auto text-center text-[13px] leading-[18px] min-h-[36px] max-w-[500px] cursor-pointer;
}

.yiyan-from {
  @apply text-xs opacity-0;
  transition: opacity 0.3s;
}

.app-yiyan:hover .yiyan-from {
  opacity: 1;
}
</style>
