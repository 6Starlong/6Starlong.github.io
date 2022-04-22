<script setup>
import { VTIconMapPin, VTIconMail, VTIconGitHub } from '@vue/theme'
</script>

<template>
  <div class="About mx-auto container">
    <div class="flex">
      <figure>
        <img src="/avatar.png" class="h-[80px]" />
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

    <img
      src="https://w.wallhaven.cc/full/48/wallhaven-48zx3k.jpg"
      class="mt-[50px] rounded-lg"
      style="border-radius: 8px"
    />
  </div>
</template>

<style scoped>
.About {
  margin: 50px 0;
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
