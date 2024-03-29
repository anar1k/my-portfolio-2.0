<script setup lang="ts">
import type { IQueryRoute } from '~/types/route';
import UiPageTitle from '~/components/Ui/UiPageTitle.vue';
import GithubCard from '~/components/Github/GithubCard.vue';
import UiPagination from '~/components/Ui/UiPagination.vue';
import UiLoading from '~/components/Ui/UiLoading.vue';

useHead({
  titleTemplate: (pageTitle) => {
    return `GitHub - ${pageTitle}`;
  }
});

const githubStore = useGithubStore();
const { fetchUser, fetchRepos, fetchGithubColors } = githubStore;
const { repos, totalRepos } = storeToRefs(githubStore);

const route = useRoute();
const { page }: IQueryRoute = route.query;

const loading = ref<boolean>(false);
const perPage = 8;
const elBlock = ref<HTMLElement | null>(null);

await Promise.all([
  fetchUser(),
  fetchRepos(Number(page) || 1, perPage),
  fetchGithubColors()
]);

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
      GitHub
    </ui-page-title>

    <div
      v-if="!repos.length"
      class="grid md:grid-cols-2 gap-8"
    >
      {{ $t('empty') }}
    </div>

    <template v-else>
      <div class="p-0.5 grid md:grid-cols-2 gap-8">
        <github-card
          v-for="item in repos"
          :key="item.id"
          v-bind="item"
          :url="item.html_url"
          :stargazers-count="item.stargazers_count"
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
        class="rounded-3xl"
      />
    </template>
  </div>
</template>
