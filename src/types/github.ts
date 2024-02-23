export interface IRepo {
    id: number,
    html_url: string,
    name: string,
    description: string,
    language: string | null,
    stargazers_count: number,
    forks: number,
}

export interface IColors {
    [key: string]: {
        color: string,
        url: string
    };
}
