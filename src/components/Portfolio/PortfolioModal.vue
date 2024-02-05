<script setup lang="ts">
import type { IProject } from '~/types/project';
import { isCorrectDate } from '~/utils';

interface IProps {
  project: IProject | null
}

const props = withDefaults(defineProps<IProps>(), {
  project: null
});

const isOpen = defineModel<boolean>();
const { locale } = useI18n();

const getDate = computed<string>(() => {
  if (!props.project?.date) { return ''; }

  const { date } = props.project;

  const newDate: Date = new Date(date);

  if (!isCorrectDate(newDate)) { return ''; }

  return `${newDate.toLocaleString(locale.value, { month: 'long' })} ${newDate.getFullYear()}`;
});
</script>

<template>
  <UModal
    v-if="project"
    v-model="isOpen"
    :ui="{
      width: 'sm:max-w-2xl',
      container: 'items-center'
    }"
  >
    <UCard
      :ui="{
        ring: '',
        rounded: 'rounded-lg',
      }"
    >
      <UButton
        variant="soft"
        icon="i-heroicons-x-mark-20-solid"
        class="absolute right-2 top-2"
        @click="isOpen = false"
      />

      <NuxtPicture
        format="webp"
        :src="project.img"
        :img-attrs="{
          class: 'w-full rounded-lg',
          alt: 'photo',
        }"
      />

      <div class="space-y-3 mt-4">
        <h4 class="text-gray-900 dark:text-white text-lg sm:text-2xl capitalize">
          {{ project.title }}
        </h4>

        <ul class="text-xs flex gap-x-2 divide-x divide-gray-300 dark:divide-gray-700 text-gray-500">
          <li
            v-if="project.date"
            class="flex items-center gap-x-2 capitalize"
          >
            <UIcon name="i-heroicons-calendar-days" />

            {{ getDate }}
          </li>

          <li
            v-if="project.category"
            class="first:pl-0 pl-2 flex items-center gap-x-2 capitalize"
          >
            <UIcon name="i-heroicons-tag" />

            {{ project.category[locale] }}
          </li>

          <li
            v-if="project.link"
            class="first:pl-0 pl-2"
          >
            <a
              :href="project.link"
              class="hover:text-primary flex items-center gap-x-2"
              target="_blank"
            >
              <UIcon name="i-heroicons-globe-alt" />

              <span>{{ $t('linkToWebsite') }}</span>
            </a>
          </li>
        </ul>

        <p class="font-light text-sm">
          {{ project.description[locale] }}
        </p>
      </div>
    </UCard>
  </UModal>
</template>
