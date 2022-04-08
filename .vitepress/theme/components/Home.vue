<template>
  <div class="text-center">
    <div class="tracking-[0.25em]">I'm a Frontend Developer</div>
    <div class="my-8">
      <a href="https://github.com/6Starlong" class="inline-block mx-5" target="_black">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-github"></use>
        </svg>
      </a>
      <a href="/blog/" class="inline-block mx-5">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-blog"></use>
        </svg>
      </a>
    </div>
    <p class="leading-8 tracking-[9px]">******</p>
    <p>☕ This site is built with VitePress 🛠️</p>
  </div>
</template>

<style lang="postcss">
.home {
  @apply flex flex-col justify-center items-center;
  height: 75vh;
}

.home .home-hero {
  margin-bottom: 0.75rem;
}

.home .home-hero .title {
  font-weight: bold;
  font-size: 4.5em;
}

.home .home-hero .image {
  max-height: 200px;
}

.home .icon {
  width: 4em;
  height: 4em;
}

.home .footer {
  @apply fixed left-0 right-0 bottom-0;
}
</style>
