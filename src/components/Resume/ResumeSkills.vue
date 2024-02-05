<script setup lang="ts">
import UiCardGradient from '~/components/Ui/UiCardGradient.vue';

interface ISkill {
  id: number,
  label: string,
  value: number
}

const skills: ISkill[] = [
  {
    id: 1,
    label: 'HTML',
    value: 95
  },
  {
    id: 2,
    label: 'CSS',
    value: 82
  },
  {
    id: 3,
    label: 'JavaScript',
    value: 74
  },
  {
    id: 4,
    label: 'Vue',
    value: 85
  }
];
</script>

<template>
  <ui-card-gradient>
    <ul class="space-y-4 sm:space-y-6">
      <li
        v-for="item in skills"
        :key="item.id"
      >
        <div class="text-sm sm:text-base mb-2">
          <span class="font-medium text-gray-900 dark:text-white mr-1.5">
            {{ item.label }}
          </span>

          <span class="text-gray-700 dark:text-gray-400 font-light">
            {{ item.value }}%
          </span>
        </div>

        <UMeter :value="item.value" />
      </li>
    </ul>
  </ui-card-gradient>
</template>
