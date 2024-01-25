<script setup lang="ts">
import type { IQueryRoute } from '~/types/route';
import UiPageTitle from '~/components/Ui/UiPageTitle.vue';
import GithubCard from '~/components/GithubCard.vue';
import UiPagination from '~/components/Ui/UiPagination.vue';
import UiLoading from '~/components/Ui/UiLoading.vue';

const githubStore = useGithubStore();
const { fetchUser, fetchRepos } = githubStore;
const { repos, totalRepos } = storeToRefs(githubStore);

const route = useRoute();
const { page }: IQueryRoute = route.query;

const loading = ref<boolean>(false);
const perPage = 6;
const elBlock = ref<HTMLElement | null>(null);

await fetchUser();
await fetchRepos(Number(page) || 1, perPage);

const changePage = async (newPage: number) => {
  try {
    loading.value = true;

    await fetchRepos(newPage, perPage);

    elBlock.value?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div ref="elBlock">
    <ui-page-title>
      github
    </ui-page-title>

    <template v-if="repos.length">
      <div class="relative">
        <div class="p-0.5 grid md:grid-cols-2 gap-8 relative">
          <github-card
            v-for="item in repos"
            :key="item.id"
            :repo="item"
          />
        </div>

        <ui-pagination
          class="justify-center mt-8"
          :total="totalRepos"
          :page-count="perPage"
          @change="changePage"
        />

        <ui-loading
          :loading="loading"
          class="rounded-xl"
        />
      </div>
    </template>

    <div
      v-else
      class="grid md:grid-cols-2 gap-8"
    >
      {{ $t('empty') }}
    </div>
  </div>
</template>
