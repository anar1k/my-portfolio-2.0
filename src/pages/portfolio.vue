<script setup lang="ts">
import UiPageTitle from '~/components/Ui/UiPageTitle.vue';
import PortfolioCard from '~/components/Portfolio/PortfolioCard.vue';
</script>

<template>
  <div>
    <ui-page-title>
      portfolio page
    </ui-page-title>

    <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
      <li
        v-for="(item) in 10"
        :key="item"
      >
        <portfolio-card :index="item % 2 === 0" />
      </li>
    </ul>
  </div>
</template>
