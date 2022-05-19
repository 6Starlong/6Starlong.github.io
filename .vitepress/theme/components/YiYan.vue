<script setup>
import { ref, onMounted } from 'vue'
import { copyToClip } from '@/utils'

const yiyan = ref('')
const showFrom = ref(false)
onMounted(() => {
  fetch('https://v1.hitokoto.cn')
    .then((data) => data.json())
    .then((data) => (yiyan.value = data))
    .catch(console.error)
})
</script>

<template>
  <div class="app-yiyan">
    <p
      v-if="yiyan.hitokoto"
      class="yiyan-text"
      title="一言 点击复制"
      @mouseover="showFrom = true"
      @mouseout="showFrom = false"
      @click="copyToClip(`「 ${yiyan.hitokoto} 」 - ${yiyan.from}`)"
    >
      「 {{ yiyan.hitokoto }} 」
    </p>
    <Transition name="fade">
      <p v-show="showFrom" class="yiyan-from">- {{ yiyan.from }} -</p>
    </Transition>
  </div>
</template>

<style scoped>
.app-yiyan {
  @apply mt-[20px] text-center text-sm leading-[20px] min-h-[40px];
  color: rgba(255, 255, 255, 0.8);
}
.yiyan-text {
  @apply inline-block cursor-pointer;
}
.yiyan-from {
  font-size: 0.8em;
}
</style>

<style>
#hero .app-yiyan {
  @apply absolute left-0 right-0 bottom-0;
}
</style>
