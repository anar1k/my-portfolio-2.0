<script setup lang="ts">
import type { IRepo } from '~/types/github';

interface IProps {
  repo: IRepo | null
}

withDefaults(defineProps<IProps>(), {
  repo: null
});

const githubStore = useGithubStore();
const { colors } = storeToRefs(githubStore);
</script>

<template>
  <UCard
    v-if="repo"
    :ui="{
      base: 'py-3 px-5',
      body: {
        base: 'h-full',
        padding: ''
      },
      rounded: 'rounded-xl'
    }"
  >
    <div class="border dark:border-white rounded p-4 h-full grid">
      <div class="flex items-center">
        <UIcon
          name="i-octicon-repo-16"
          class="w-4 h-4 mr-2"
        />

        <a
          :href="repo.html_url"
          target="_blank"
          class="font-medium text-purple-800 dark:text-primary-200 hover:underline"
        >
          {{ repo.name }}
        </a>
      </div>

      <div class="text-xs mt-2 mb-4">
        {{ repo.description }}
      </div>

      <div class="text-xs flex gap-x-4 self-end">
        <div
          v-if="repo.language"
          class="flex items-center"
        >
          <span
            v-if="repo.language in colors"
            :style="{ backgroundColor: colors[repo.language].color }"
            class="w-3 h-3 rounded-full relative"
          />

          <span class="pl-2">{{ repo.language }}</span>
        </div>

        <div
          v-if="repo.stargazers_count"
          class="flex items-center hover:text-primary"
        >
          <UIcon
            name="i-octicon-star-16"
            class="w-4 h-4 mr-1"
          />

          <span>{{ repo.stargazers_count }}</span>
        </div>

        <div
          v-if="repo.forks"
          class="flex items-center hover:text-primary"
        >
          <UIcon
            name="i-octicon-repo-forked-16"
            class="w-4 h-4 mr-1"
          />

          <span>{{ repo.forks }}</span>
        </div>
      </div>
    </div>
  </UCard>
</template>
