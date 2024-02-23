<script setup lang="ts">
import type { IRepo } from '~/types/github';

defineProps<{
  url: IRepo['html_url'],
  name: IRepo['name'],
  description: IRepo['description'],
  language: IRepo['language'],
  stargazersCount: IRepo['stargazers_count'],
  forks: IRepo['forks'],
}>();

const githubStore = useGithubStore();
const { colors } = storeToRefs(githubStore);
</script>

<template>
  <UCard
    :ui="{
      base: 'py-3 px-5',
      body: {
        base: 'h-full',
        padding: ''
      },
      rounded: 'rounded-xl'
    }"
  >
    <div class="border dark:border-white rounded p-4 h-full flex flex-col">
      <div class="flex items-center">
        <UIcon
          name="i-octicon-repo-16"
          class="size-4 mr-2"
        />

        <a
          :href="url"
          target="_blank"
          class="font-medium text-purple-800 dark:text-primary-200 hover:underline"
        >
          {{ name }}
        </a>
      </div>

      <div class="text-xs mt-2 mb-4">
        {{ description }}
      </div>

      <div class="mt-auto text-xs flex gap-x-4">
        <div
          v-if="language"
          class="flex items-center"
        >
          <span
            v-if="language in colors"
            :style="{ backgroundColor: colors[language].color }"
            class="size-3 rounded-full relative"
          />

          <span class="pl-2">{{ language }}</span>
        </div>

        <div
          v-if="stargazersCount"
          class="flex items-center hover:text-primary"
        >
          <UIcon
            name="i-octicon-star-16"
            class="size-4 mr-1"
          />

          <span>{{ stargazersCount }}</span>
        </div>

        <div
          v-if="forks"
          class="flex items-center hover:text-primary"
        >
          <UIcon
            name="i-octicon-repo-forked-16"
            class="size-4 mr-1"
          />

          <span>{{ forks }}</span>
        </div>
      </div>
    </div>
  </UCard>
</template>
