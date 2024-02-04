import type { TLanguage } from '~/types/language';

export interface ITechnology {
    id: number,
    title: string,
    description: Record<TLanguage, string>,
    icon: `i-${'heroicons' | 'simple-icons'}-${string}`,
    iconColor: string
}
