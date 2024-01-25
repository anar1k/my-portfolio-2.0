<script setup lang="ts">
import UiPageTitle from '~/components/Ui/UiPageTitle.vue';

const route = useRoute();
const router = useRouter();

interface IQueryRoute {
  page?: string
}

const currentPage = computed<number>({
  get () {
    const { page }: IQueryRoute = route.query;

    const newPage = Number(page);

    return !isNaN(newPage) ? newPage : 1;
  },

  set (newValue: number) {
    router.push({
      query: {
        page: newValue
      }
    });
  }
});
</script>

<template>
  <div>
    <ui-page-title>
      github
    </ui-page-title>

    <UPagination
      v-model="currentPage"
      :page-count="5"
      :total="100"
      :prev-button="{ icon: 'i-heroicons-arrow-small-left-20-solid', label: 'Prev', color: 'gray' }"
      :next-button="{ icon: 'i-heroicons-arrow-small-right-20-solid', trailing: true, label: 'Next', color: 'gray' }"
    />
  </div>
</template>
