import { defineStore } from 'pinia';
import type { ITechnology } from '~/types/technology';
import type { TAboutItem } from '~/types/about';

interface IState {
  textList: TAboutItem[],
  technologies: ITechnology[]
}

export const useABoutStore = defineStore('about', {
  state: (): IState => ({
    textList: [],
    technologies: []
  }),

  actions: {
    async fetchAbout (): Promise<void> {
      try {
        const { data } = await useFetch<TAboutItem[]>('/api/about');

        this.textList = data.value || [];
      } catch (error: unknown) {
        this.textList = [];

        throw error;
      }
    },

    async fetchTechnologies (): Promise<void> {
      try {
        const { data } = await useFetch<ITechnology[]>('/api/technologies');

        this.technologies = data.value || [];
      } catch (error: unknown) {
        this.technologies = [];

        throw error;
      }
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useABoutStore, import.meta.hot));
}
