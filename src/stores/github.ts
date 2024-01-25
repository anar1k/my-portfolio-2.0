import { defineStore } from 'pinia';

interface IUser {
  login: string,
  totalRepos: number
}

interface IRepo {
  id: number,
  html_url: string,
  name: string,
  description: string,
  language: string,
  stargazers_count: number,
  size: number,
  forks: number,
}

interface IState {
  user: IUser,
  repos: IRepo[]
}

const apiGithub = 'https://api.github.com';

export const useGithubStore = defineStore('github', {
  state: (): IState => ({
    user: {
      login: '',
      totalRepos: 0
    },

    repos: []
  }),

  actions: {
    async fetchUser (): Promise<void> {
      try {
        interface IResponse {
          public_repos: number,
          login: string
        }

        const { data } = await useFetch<IResponse>(apiGithub + '/users/anar1k');

        this.$patch({
          user: {
            login: data.value?.login || '',
            totalRepos: data.value?.public_repos || 0
          }
        });
      } catch (error: unknown) {
        this.$patch({
          user: {
            login: '',
            totalRepos: 0
          }
        });

        throw error;
      }
    },

    async fetchRepos (page: number = 1): Promise<void> {
      try {
        const { data } = await useFetch<IRepo[]>(apiGithub + '/users/anar1k/repos', {
          params: {
            per_page: 5,
            page
          }
        });
        console.log(data.value);
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
