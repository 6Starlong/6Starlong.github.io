<script setup>
import { VTIconMapPin, VTIconMail } from '@vue/theme'
</script>

<template>
  <div class="container max-w-screen-md min-h-[calc(100vh-123px)] pt-12 pb-24 px-6">
    <h1 class="blog-title">About</h1>
    <div class="rounded-xl">
      <div class="p-6 bg-vt-bg-soft rounded-lg shadow-lg">
        <div class="flex flex-wrap py-4">
          <img src="/avatar.png" class="mr-8 h-24 rounded-full shadow-sm" />
          <div class="py-3">
            <div class="mb-2 text-xl font-quicksand">Sᴛᴀʀʟᴏɴɢ💫</div>
            <div class="text-sm">
              <section class="mb-1 flex items-center">
                <VTIconMapPin class="mr-2 w-4 h-4 fill-current" />
                <span>Kunming，China</span>
              </section>
              <section class="flex items-center">
                <VTIconMail class="mr-2 w-4 h-4 fill-current" />
                <span>starlong.lu@gmail.com</span>
              </section>
            </div>
          </div>
        </div>

        <div class="relative">
          <img src="./wallhaven.jpg" class="rounded-lg shadow-sm" />
          <YiYan class="absolute right-0 bottom-0 text-white" />
        </div>

        <p class="vt-doc my-5 text-sm">
          本站基于
          <a href="https://github.com/vuejs/vitepress" target="_blank">VitePress</a> 和
          <a href="https://github.com/vuejs/theme/" target="_blank">@vue/theme</a> 建立。网站内容以
          Markdown 格式书写，位于 src 文件夹中，自定义主题内容查看
          <a href="/frame/vitepress/theme.html">theme.md</a>
        </p>
      </div>
    </div>
  </div>
</template>
