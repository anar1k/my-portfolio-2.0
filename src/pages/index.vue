<script setup lang="ts">

import LanguageToggleButton from '~/components/UI/LanguageToggleButton.vue';
import ThemeToggleButton from '~/components/UI/ThemeToggleButton.vue';
</script>

<template>
  <div class="flex gap-x-4">
    <ULink to="/github">
      github
    </ULink>

    <ULink to="/portfolio">
      portfolio
    </ULink>

    <language-toggle-button />

    <theme-toggle-button />
  </div>
</template>

<style scoped>

</style>
