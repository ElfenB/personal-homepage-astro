<template>
  <a :href="to" :target="getTarget">
    <slot />
  </a>
</template>

<script setup lang='ts'>
import { computed } from '@vue/reactivity';
const props = defineProps<{ to: string }>()

const getTarget = computed(() => props.to.substring(0, 4) === 'http' ? '_blank' : '')

</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: inherit;
  margin: auto 0;

  &:hover {
    filter: brightness(90%);
  }
}
</style>
