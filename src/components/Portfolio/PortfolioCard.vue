<script setup lang="ts">
import type { IProject } from '~/types/project';

interface IProps {
  project: IProject | null
}

withDefaults(defineProps<IProps>(), {
  project: null
});

const { locale } = useI18n();
</script>

<template>
  <UCard
    v-if="project"
    :ui="{
      base: 'group duration-200',
      shadow: 'shadow-md dark:shadow-md hover:shadow-primary-400 dark:hover:shadow-primary-700',
      rounded: 'rounded-2xl',
      body: {
        base: 'grid auto-rows-[200px_auto]',
        padding: ''
      }
    }"
  >
    <div class="relative overflow-hidden rounded-t-2xl">
      <NuxtPicture
        format="webp"
        :src="project.img"
        :img-attrs="{
          class: 'object-cover group-hover:scale-[1.1] h-full w-full transition-transform duration-200 ease-in',
          alt: '',
          loading: 'lazy'
        }"
      />

      <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60" />

      <UIcon
        name="i-heroicons-eye"
        class="absolute
               inset-0
               m-auto
               size-8
               text-white
               opacity-0
               group-hover:opacity-100
               scale-75
               group-hover:scale-100
               duration-200
               ease-in
        "
      />
    </div>

    <div class="p-4 capitalize leading-5">
      <h4 class="font-medium text-gray-900 dark:text-white group-hover:text-primary">
        {{ project.title }}
      </h4>

      <div class="text-gray-500 dark:text-gray-400 font-light">
        {{ project.category[locale] }}
      </div>
    </div>
  </UCard>
</template>
