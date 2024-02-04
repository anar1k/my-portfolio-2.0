<script setup lang="ts">
import UiPageTitle from '~/components/Ui/UiPageTitle.vue';
import IndexCards from '~/components/Index/IndexCards.vue';
import IndexText from '~/components/Index/IndexText.vue';

const aboutStore = useABoutStore();

const { fetchTechnologies, fetchAbout } = aboutStore;

await Promise.all([
  fetchTechnologies(),
  fetchAbout()
]);
</script>

<template>
  <div>
    <ui-page-title>
      {{ $t('title.about') }}
    </ui-page-title>

    <index-text class="mb-10" />

    <index-cards />
  </div>
</template>
