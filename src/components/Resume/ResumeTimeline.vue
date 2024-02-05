<script setup lang="ts">
const resumeStore = useResumeStore();

const { timelineItems } = storeToRefs(resumeStore);

const { locale } = useI18n();
</script>

<template>
  <ul class="text-sm mb-7">
    <li
      v-for="item in timelineItems"
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
        <h4 class="mb-2 sm:text-base font-medium text-gray-900 dark:text-white">
          {{ typeof item.title === 'string' ? item.title : item.title[locale] }}
        </h4>

        <div class="text-primary">
          {{ typeof item.period === 'string' ? item.period : item.period[locale] }}
        </div>

        <p class="mb-2 text-gray-400 dark:text-gray-500">
          {{ item.employment[locale] }}
        </p>

        <p>
          {{ item.position }}
        </p>
      </div>
    </li>
  </ul>
</template>
