<script setup lang="ts">
interface IProps {
  is?: keyof HTMLElementTagNameMap
}

withDefaults(defineProps<IProps>(), {
  is: 'div'
});
</script>

<template>
  <UCard
    :as="is"
    :ui="{
      base: 'p-4 sm:p-8',
      background: 'dark:bg-[#1e1e1f]',
      rounded: 'rounded-3xl',
      divide: '',
      ring: 'dark:ring-gray-700',
      shadow: 'shadow-lg dark:shadow-2xl',
      body: {
        padding: ''
      }
    }"
  >
    <slot />
  </UCard>
</template>
