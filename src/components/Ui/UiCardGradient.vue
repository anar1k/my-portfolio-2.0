<script setup lang="ts">

</script>

<template>
  <UCard
    class=""
    :ui="{
      base: 'relative z-[1] before:absolute before:z-[-1] before:inset-[1px] before:rounded-[inherit]',
      background: `
        bg-gradient-to-br
        from-primary-50
        dark:from-[#404040FF]
        dark:to-[#40404000]
        to-50%

        before:bg-gradient-to-br
        dark:before:bg-[#202022FF]
        dark:before:from-[#2D2D2E40]
        dark:before:to-[#1B1B1D00]
      `,
      ring: ''
    }"
  >
    <slot />
  </UCard>
</template>
