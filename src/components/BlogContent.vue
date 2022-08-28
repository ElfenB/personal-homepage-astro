<template>
  <div class="content">
    <slot />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.content {
  width: 100%;
  padding: 0 1rem 1rem 1rem;

  :global(img) {
    width: 100%;
  }
}
</style>
