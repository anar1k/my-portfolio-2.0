<script setup lang="ts">

</script>

<template>
  <UCard
    class=""
    :ui="{
      base: 'relative z-[1] before:absolute before:z-[-1] before:inset-[1px] before:rounded-[inherit]',
      background: `
        bg-gradient-to-br
        from-[#404040FF]
        to-[#40404000]
        to-50%

        before:bg-gradient-to-br
        before:bg-[#202022FF]
        before:from-[#2D2D2E40]
        before:to-[#1B1B1D00]
      `,
      shadow: 'shadow-2xl',
      ring: ''
    }"
  >
    <slot />
  </UCard>
</template>
