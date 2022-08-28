<template>
  <LinkTreeLink class="linkitem" :to="link.to">
    <img :src="link.icon" :alt="link.name">
    <p>{{ link.name }}</p>
  </LinkTreeLink>
</template>

<script setup lang='ts'>
import type { Link } from '../data/linktree';
import LinkTreeLink from './LinkTreeLink.vue';

defineProps<{ link: Link }>();
</script>

<style scoped>
.linkitem {
  width: 10rem;
  display: flex;
  flex-direction: column;
  text-align: center;
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
