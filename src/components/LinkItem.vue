<template>
  <a class="linkitem" :href="link.to" target="_blank">
    <img :src="link.icon" :alt="link.name">
    <p>{{ link.name }}</p>
  </a>
</template>

<script setup lang='ts'>
import type { Link } from './LinkTree.vue';

defineProps<{ link: Link }>();
</script>

<style scoped>
.linkitem {
  width: 10rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  color: inherit;
}

img {
  height: 3rem;
}

@media only screen and (max-width: 600px) {
  img {
    height: 5rem;
  }
}
</style>
