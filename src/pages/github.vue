<script setup lang="ts">
import UiPageTitle from '~/components/Ui/UiPageTitle.vue';
import UiPagination from '~/components/Ui/UiPagination.vue';

const githubStore = useGithubStore();

const { fetchUser, fetchRepos } = githubStore;

const { repos, user } = storeToRefs(githubStore);

await fetchUser();
await fetchRepos();
console.log(repos.value);
/* if (!repos.value.length) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true });
} */
</script>

<template>
  <div>
    <ui-page-title>
      github
    </ui-page-title>

    <div
      v-for="item in repos"
      :key="item.id"
      class="h-12"
    >
      {{ item.name }}
    </div>

    <ui-pagination
      :total="user.totalRepos"
      @change="(newValue) => fetchRepos(newValue)"
    />
  </div>
</template>
