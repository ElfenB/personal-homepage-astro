<template>
  <div class="blogheader">
    <h1><a href="/">benjamin elfen.</a></h1>
    <div class="navlinks">
      <LinkTreeLink class="navlinkitem" v-for="link in links" :to="link.to">{{ link.name }}</LinkTreeLink>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { links } from 'src/data/linktree';
import LinkTreeLink from './LinkTreeLink.vue';

</script>

<style scoped>
.blogheader {
  background-color: var(--header-bg);
  color: white;
  height: var(--blog-header-height);
  display: flex;
  justify-content: space-between;
}

h1 {
  margin: auto 0;
  padding: 1rem;
}

h1 a {
  text-decoration: none;
  color: inherit;
}

.navlinks {
  display: flex;
  flex-direction: row;
}

.navlinkitem {
  margin-right: 1rem;
}
</style>
