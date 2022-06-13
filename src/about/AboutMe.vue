<script setup>
import { onMounted, onUnmounted } from 'vue'
import { VTIconMapPin, VTIconMail } from '@vue/theme'
import { toggleNavBarClass } from '@theme/utils'

const { openScrollEvent, closeScrollEvent } = toggleNavBarClass()

onMounted(() => {
  const navbar = document.querySelector('.VPNavBar')
  openScrollEvent({ element: navbar, className: '!shadow-none', offset: 60 })
  onUnmounted(() => closeScrollEvent())
})
</script>

<template>
  <div class="min-h-[calc(100vh-130px)]">
    <div class="my-2 px-2 w-full h-[380px]">
      <img src="./wallhaven.jpg" class="w-full h-full rounded-lg object-cover object-[0_25%]" />
    </div>
    <div class="-mt-16 relative container">
      <div class="flex flex-col items-center bg-vt rounded-xl shadow-lg">
        <img src="/avatar.png" class="max-w-[160px] translate-y-[-80px] rounded-full shadow-md" />
        <div class="translate-y-[-80px] text-center text-vt-2 font-bold duration-200">
          <h3 class="mt-8 mb-6 text-4xl font-Roboto-Slab">Sᴛᴀʀʟᴏɴɢ</h3>
          <h6 class="my-2 text-sm font-Roboto">Frontend Developer</h6>
          <div class="inline-block my-8 mx-auto text-sm font-Roboto">
            <section class="flex items-center">
              <VTIconMapPin class="mr-2 w-4 h-4 fill-current" />
              <span>Kunming，China</span>
            </section>
            <section class="flex items-center">
              <VTIconMail class="mr-2 w-4 h-4 fill-current" />
              <span>starlong.lu@gmail.com</span>
            </section>
          </div>
          <hr />
          <p class="vt-doc my-1 text-sm">
            ☕ This site is built with
            <a href="https://github.com/vuejs/vitepress" target="_blank">VitePress</a> &
            <a href="https://github.com/vuejs/theme/" target="_blank">@vue/theme</a>
            🛠️
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
