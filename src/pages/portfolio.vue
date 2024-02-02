<script setup lang="ts">
import UiPageTitle from '~/components/Ui/UiPageTitle.vue';
import PortfolioCard from '~/components/Portfolio/PortfolioCard.vue';
import type { IProject } from '~/types/project';
import PortfolioModal from '~/components/Portfolio/PortfolioModal.vue';

const list: IProject[] = [
  {
    id: 1,
    title: 'It Never Ends Ft. Julian Wilt',
    category: 'Song',
    description: 'This song was made for gear testing and to honour the work of the great band, Bring Me The Horizon.',
    img: '/images/portfolio/img0.png',
    date: 'January 2023',
    link: 'https://ite.aghea.site/'
  },
  {
    id: 2,
    title: 'eeeeeeeeeeeeeeeee',
    category: 'test',
    description: 'dsadsadadasdas',
    img: '/images/portfolio/img1.png',
    date: 'January 2023',
    link: 'https://ite.aghea.site/'
  }
];

const isOpen = ref(false);
const selectedProject = ref<IProject | null>(null);

const handleCard = (project: IProject) => {
  selectedProject.value = project;
  isOpen.value = true;
};
</script>

<template>
  <div>
    <ui-page-title>
      {{ $t('title.portfolio') }}
    </ui-page-title>

    <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
      <li
        v-for="item in list"
        :key="item.id"
      >
        <button
          :aria-label="item.title"
          class="text-left w-full"
          type="button"
          @click="handleCard(item)"
        >
          <portfolio-card :project="item" />
        </button>
      </li>
    </ul>

    <portfolio-modal
      v-model="isOpen"
      :project="selectedProject"
    />
  </div>
</template>
