<script setup lang="ts">
import UiPageTitle from '~/components/Ui/UiPageTitle.vue';
import PortfolioCard from '~/components/Portfolio/PortfolioCard.vue';
import type { IProject } from '~/types/project';
import PortfolioModal from '~/components/Portfolio/PortfolioModal.vue';
import { usePortfolioStore } from '~/stores/portfolio';

const portfolioStore = usePortfolioStore();
const { fetchProjects } = portfolioStore;
const { projects } = storeToRefs(portfolioStore);

await fetchProjects();

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

    <div v-if="!projects.length">
      {{ $t('empty') }}
    </div>

    <ul
      v-else
      class="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
    >
      <li
        v-for="item in projects"
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
