<script setup lang="ts">
const { locale, setLocale } = useI18n();
</script>

<template>
  <UTooltip :text="$t('language')">
    <UButton
      variant="link"
      @click="setLocale(locale === 'ru' ? 'en' : 'ru')"
    >
      <picture>
        <img
          :src="`/images/flags/${locale === 'ru' ? 'russia' : 'usa'}.png`"
          class="h-4"
          :alt="locale === 'ru' ? 'RU' : 'EN'"
        >
      </picture>
    </UButton>
  </UTooltip>
</template>
