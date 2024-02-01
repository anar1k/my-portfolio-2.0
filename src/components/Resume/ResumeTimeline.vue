<script setup lang="ts">
interface ISection {
  id: number,
  title: string,
  period: string,
  position: string,
  employment: string
}

const sections: ISection[] = [
  {
    id: 1,
    title: 'Company',
    period: 'From — Until',
    employment: 'Remote',
    position: 'position'
  },

  {
    id: 2,
    title: 'Company',
    period: 'From — Until',
    employment: 'Remote',
    position: 'position'
  }
];
</script>

<template>
  <ul class="text-sm mb-7">
    <li
      v-for="item in sections"
      :key="item.id"
      class="flex gap-x-12 group"
    >
      <div class="flex flex-col items-center">
        <div
          class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary shadow-[0_0_0_4px] shadow-gray-200 dark:shadow-gray-700"
        />

        <div class="w-[1px] h-full bg-gray-200 dark:bg-gray-700 group-last:hidden" />
      </div>

      <div class="pb-5 group-last:pb-0">
        <h4 class="mb-2 capitalize sm:text-base font-medium text-gray-900 dark:text-white">
          {{ item.title }}
        </h4>

        <div class="text-primary">
          {{ item.period }}
        </div>

        <p class="mb-2 text-gray-400 dark:text-gray-500">
          {{ item.employment }}
        </p>

        <p>
          {{ item.position }}
        </p>
      </div>
    </li>
  </ul>
</template>
