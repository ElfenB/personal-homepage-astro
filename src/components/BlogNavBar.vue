<template>
  <div class="navbar">
    <h3>Navigation</h3>
    <slot />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.navbar {
  padding: 1rem;
  border-right: 1px solid rgba(128, 128, 128, 0.2);
  min-width: fit-content;
  background: var(--primary);
  filter: brightness(80%);
}

@media (prefers-color-scheme: dark) {
  .navbar {
    border-right: 1px solid rgba(232, 230, 230, 0.3);
  }
}
</style>
