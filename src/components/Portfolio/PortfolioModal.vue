<script setup lang="ts">
import type { IProject } from '~/types/project';

interface IProps {
  project: IProject | null
}

withDefaults(defineProps<IProps>(), {
  project: null
});

const isOpen = defineModel<boolean>();
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
            class="flex items-center gap-x-2"
          >
            <UIcon name="i-heroicons-calendar-days" />

            {{ project.date }}
          </li>

          <li
            v-if="project.category"
            class="first:pl-0 pl-2 flex items-center gap-x-2"
          >
            <UIcon name="i-heroicons-tag" />

            {{ project.category }}
          </li>

          <li
            v-if="project.link"
            class="first:pl-0 pl-2"
          >
            <UTooltip :text="$t('linkToWebsite')">
              <a
                :href="project.link"
                class="hover:text-primary flex items-center gap-x-2"
                target="_blank"
              >
                <UIcon name="i-heroicons-globe-alt" />

                <span>View Project</span>
              </a>
            </UTooltip>
          </li>
        </ul>

        <p class="font-light text-sm">
          {{ project.description }}
        </p>
      </div>
    </UCard>
  </UModal>
</template>
