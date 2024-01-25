<script setup lang="ts">
import type { IQueryRoute } from '~/types/route';
const route = useRoute();
const router = useRouter();

interface IProps {
  total: number,
  pageCount?: number
}

withDefaults(defineProps<IProps>(), {
  pageCount: 10,
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
  />
</template>
