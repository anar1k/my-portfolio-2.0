<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed<boolean>({
  get () {
    return colorMode.value === 'dark';
  },

  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  }
});
</script>

<template>
  <ClientOnly>
    <UTooltip :text="$t('toggles.theme')">
      <UButton
        :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
        color="gray"
        variant="ghost"
        :aria-label="$t('toggles.theme')"
        square
        @click="isDark = !isDark"
      />
    </UTooltip>

    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>
