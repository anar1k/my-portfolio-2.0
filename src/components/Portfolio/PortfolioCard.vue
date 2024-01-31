<script setup lang="ts">
defineProps<{index: boolean}>();
</script>

<template>
  <div class="grid auto-rows-[200px_auto] group cursor-pointer">
    <NuxtPicture
      class="overflow-hidden rounded-2xl"
      format="webp"
      :src="`/images/portfolio/img${index ? 0 : 1}.png`"
      :img-attrs="{
        class: 'object-cover group-hover:scale-[1.1] h-full w-full transition',
        alt: ''
      }"
    />

    <div>
      <div>dsada</div>
      <div>dsada</div>
    </div>
  </div>
</template>
