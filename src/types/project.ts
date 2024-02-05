import type { TLanguageText } from '~/types/language';

export interface IProject {
    id: number,
    title: string,
    category: TLanguageText,
    img: `/images/portfolio/${string}`,
    description: TLanguageText,
    date?: string,
    link?: string
}
