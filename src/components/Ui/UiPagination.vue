<script setup lang="ts">
const route = useRoute();
const router = useRouter();

interface IQueryRoute {
  page?: string
}

interface IProps {
  total: number,
  pageCount?: number
}

withDefaults(defineProps<IProps>(), {
  pageCount: 5,
  total: 0
});

const emits = defineEmits<{
  change: [page: number]
}>();

const currentPage = computed<number>({
  get () {
    const { page }: IQueryRoute = route.query;

    return Number(page) || 1;
  },

  set (newValue: number) {
    emits('change', newValue);

    router.push({
      query: {
        page: newValue
      }
    });
  }
});
</script>

<template>
  <UPagination
    v-if="total > pageCount"
    v-model="currentPage"
    :page-count="pageCount"
    :total="total"
    :prev-button="{ icon: 'i-heroicons-arrow-small-left-20-solid', label: 'Prev', color: 'gray' }"
    :next-button="{ icon: 'i-heroicons-arrow-small-right-20-solid', trailing: true, label: 'Next', color: 'gray' }"
  />
</template>
