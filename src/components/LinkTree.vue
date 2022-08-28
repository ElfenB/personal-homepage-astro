<template>
  <div class="main">
    <LinkItem v-for="link in links" :link="link" />
  </div>
</template>

<script setup lang='ts'>
import LinkItem from './LinkItem.vue';

import { links } from 'src/data/linktree';
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
}

@media only screen and (max-width: 600px) {
  .main {
    min-height: 70vh;
    flex-direction: column;
    justify-content: space-evenly;
  }
}
</style>
