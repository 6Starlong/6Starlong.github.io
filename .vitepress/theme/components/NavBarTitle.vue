<script setup>
const props = defineProps({
  logo: { type: String, default: '' },
  title: { type: String, default: '' }
})
</script>

<template>
  <Transition name="fade" appear>
    <img class="logo" :src="props.logo" />
  </Transition>
  <Transition name="fade" appear>
    <span class="title">{{ props.title }}</span>
  </Transition>
</template>

<style>
.VPNavBarTitle svg.logo,
.VPNavBarTitle span.text {
  display: none;
}
</style>

<style scoped>
.logo {
  margin-right: 8px;
  height: 2rem;
}

.title {
  font-size: 16px;
  font-weight: 500;
  color: var(--vt-c-text-1);
}
</style>
