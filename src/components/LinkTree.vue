<template>
  <div class="main">
    <LinkItem v-for="link in links" :link="link" />
  </div>
</template>

<script setup lang='ts'>
export interface Link {
  name: string,
  to: string,
  icon: string
}

import LinkItem from './LinkItem.vue';

const links: Link[] = [
  {
    name: 'Photography',
    to: 'https://www.instagram.com/ben_clickclick',
    icon: '/img/instagram.svg'
  },
  {
    name: 'Blog',
    to: '/blog',
    icon: '/img/blog.svg'
  },
  {
    name: 'Coding',
    to: 'https://www.github.com/ElfenB',
    icon: '/img/github.svg'
  },
]
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
}

@media only screen and (max-width: 600px) {
  .main {
    height: 100vh;
    flex-direction: column;
    justify-content: space-evenly;
  }
}
</style>
