import { defineStore } from 'pinia';
import type { IProject } from '~/types/project';

interface IState {
    projects: IProject[],
}

export const usePortfolioStore = defineStore('portfolio', {
  state: (): IState => ({
    projects: []
  }),

  actions: {
    async fetchProjects (): Promise<void> {
      try {
        const { data } = await useFetch<IProject[]>('/api/projects');

        this.projects = data.value || [];
      } catch (error: unknown) {
        this.projects = [];

        throw error;
      }
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePortfolioStore, import.meta.hot));
}
