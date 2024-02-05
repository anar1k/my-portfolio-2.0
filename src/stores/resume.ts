import { defineStore } from 'pinia';
import type { ITimelineItem } from '~/types/timeline';

interface IState {
  timelineItems: ITimelineItem[],
}

export const useResumeStore = defineStore('resume', {
  state: (): IState => ({
    timelineItems: []
  }),

  actions: {
    async fetchTimelineItems (): Promise<void> {
      try {
        const { data } = await useFetch<ITimelineItem[]>('/api/timeline');

        this.timelineItems = data.value || [];
      } catch (error: unknown) {
        this.timelineItems = [];

        throw error;
      }
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useResumeStore, import.meta.hot));
}
