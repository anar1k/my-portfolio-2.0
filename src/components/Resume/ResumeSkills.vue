<script setup lang="ts">
import UiCardGradient from '~/components/Ui/UiCardGradient.vue';
</script>

<template>
  <ui-card-gradient>
    <ul class="space-y-4 sm:space-y-6">
      <li
        v-for="item in 3"
        :key="item"
      >
        <div class="text-sm sm:text-base mb-2">
          <span class="font-medium">
            Your Skill
          </span>

          <span class="text-gray-700 dark:text-gray-400 font-light">
            90%
          </span>
        </div>

        <UMeter :value="90" />
      </li>
    </ul>
  </ui-card-gradient>
</template>
