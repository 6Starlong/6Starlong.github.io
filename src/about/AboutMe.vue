<script setup>
import { VTIconMapPin, VTIconMail, VTIconGitHub } from '@vue/theme'
</script>

<template>
  <div class="About mx-auto container">
    <div class="flex">
      <figure>
        <img src="/avatar.png" class="max-h-[80px] rounded-full" />
      </figure>
      <div class="ml-7">
        <div class="mb-2 font-bold text-4xl font-['Quicksand']">Starlong</div>
        <section class="flex items-center">
          <VTIconMapPin />
          <span class="pl-4">Kunming，China</span>
        </section>
        <section class="flex items-center">
          <VTIconMail />
          <span class="pl-4">starlong.lu@gmail.com</span>
        </section>
        <div v-if="false" class="pt-4">
          <a href="https://github.com/6Starlong" class="link" target="_black">
            <VTIconGitHub />
          </a>
        </div>
      </div>
    </div>
    <img src="./wallhaven.jpg" class="mt-[50px] rounded-lg" style="border-radius: 8px" />
    <p class="mt-[20px] text-sm">
      本站基于
      <a href="https://github.com/vuejs/vitepress" target="_blank">VitePress</a> 和
      <a href="https://github.com/vuejs/theme/" target="_blank">@vue/theme</a> 建立。网站内容以
      Markdown 格式书写，位于 src 文件夹中，自定义主题内容查看
      <a href="/frame/vitepress/theme.html">theme.md</a>
    </p>
  </div>
</template>

<style scoped>
.About {
  padding: 2rem;
  border-radius: 10px;
  background-color: var(--vt-c-bg-soft);
}

svg {
  width: 16px;
  height: 16px;
  fill: var(--vt-c-text-2);
  transition: fill 0.25s;
}

.link svg {
  width: 20px;
  height: 20px;
}
</style>
