<script setup lang="ts">
import type { IRepo } from '~/types/github';
import RepoIcon from '~/components/icons/RepoIcon.vue';

interface IProps {
  repo: IRepo | null
}

withDefaults(defineProps<IProps>(), {
  repo: null
});
</script>

<template>
  <UCard
    v-if="repo"
    :ui="{
      base: 'py-3 px-5',
      body: {
        padding: ''
      },
      rounded: 'rounded-xl'
    }"
  >
    <div class="border dark:border-white rounded p-4">
      <div class="flex items-center">
        <repo-icon class="mr-2" />

        <a
          :href="repo.html_url"
          target="_blank"
          class="font-medium text-purple-800 dark:text-purple-200"
        >
          {{ repo.name }}
        </a>
      </div>

      <div class="text-xs mt-2 mb-4">
        {{ repo.description }}
      </div>

      <div class="mt-auto text-xs flex">
        <div
          v-if="repo.language"
          class="flex items-center mr-4"
        >
          <span
            :style="{ backgroundColor: repo.language ? '' : '' }"
            class="w-3 h-3 rounded-full relative"
          />

          <span class="pl-2">{{ repo.language }}</span>
        </div>

        <div
          v-if="repo.stargazers_count"
          class="flex items-center mr-4"
        >
          <!--        <svg
            class="w-4 h-4 fill-current mr-2"
            aria-label="stars"
            viewBox="0 0 16 16"
            role="img"
          >
            <path
              fill-rule="evenodd"
              :d="icon.star"
            />
          </svg>-->
          <span>{{ repo.stargazers_count }}</span>
        </div>

        <div
          v-if="repo.size"
          class="flex items-center"
        >
          <!--        <svg
            class="w-4 h-4 fill-current mr-2"
            aria-label="fork"
            viewBox="0 0 16 16"
            role="img"
          >
            <path
              fill-rule="evenodd"
              :d="icon.fork"
            />
          </svg>-->
          <span>{{ repo.forks }}</span>
        </div>
      </div>
    </div>
  </UCard>
</template>
