<script setup lang="ts">
const { locale, setLocale } = useI18n();
</script>

<template>
  <UTooltip :text="$t('toggles.language')">
    <UButton
      variant="link"
      :aria-label="$t('toggles.language')"
      @click="setLocale(locale === 'ru' ? 'en' : 'ru')"
    >
      <nuxt-img
        :src="`/images/flags/${locale === 'ru' ? 'russia' : 'usa'}.webp`"
        class="size-4"
        :alt="locale === 'ru' ? 'RU' : 'EN'"
      />
    </UButton>
  </UTooltip>
</template>
