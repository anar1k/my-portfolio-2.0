import { defineStore } from 'pinia';
import type { IRepo } from '~/types/github';

interface IState {
  totalRepos: number,
  repos: IRepo[]
}

const apiGithub: string = 'https://api.github.com';

export const useGithubStore = defineStore('github', {
  state: (): IState => ({
    totalRepos: 0,
    repos: []
  }),

  actions: {
    async fetchUser (): Promise<void> {
      try {
        interface IResponse {
          public_repos: number,
        }

        const { data } = await useFetch<IResponse>(apiGithub + '/users/anar1k', {
          pick: ['public_repos']
        });

        this.totalRepos = data.value?.public_repos || 0;
      } catch (error: unknown) {
        this.totalRepos = 0;

        throw error;
      }
    },

    async fetchRepos (page: number = 1, perPage: number = 6): Promise<void> {
      try {
        const { data } = await useFetch<IRepo[]>(apiGithub + '/users/anar1k/repos', {

          params: {
            per_page: perPage,
            page
          }
        });

        this.repos = data.value || [];
      } catch (error: unknown) {
        this.repos = [];

        throw error;
      }
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGithubStore, import.meta.hot));
}
