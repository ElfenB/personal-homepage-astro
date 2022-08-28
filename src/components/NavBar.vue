<template>
  <div class="navbar">
    <ul>
      <li v-for="item in items"><a :href="item.path">{{ item.name }}</a></li>
    </ul>
    <p>new component works!</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['items'])

</script>

<style scoped>
.navbar {
  background: rgba(139, 139, 203, 0.6);
  padding: 1rem;
}
</style>
