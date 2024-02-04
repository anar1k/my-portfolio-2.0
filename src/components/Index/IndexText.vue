<script setup lang="ts">
const { locale } = useI18n();

const aboutStore = useABoutStore();
const { textList } = storeToRefs(aboutStore);
</script>

<template>
  <ul class="text-base font-light">
    <li
      v-for="(item, index) in textList"
      :key="index"
      class="mb-6"
    >
      {{ item[locale] }}
    </li>
  </ul>
</template>
