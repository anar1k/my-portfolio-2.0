import type { TLanguageText } from '~/types/language';

export interface ITimelineItem {
    id: number,
    title: string | TLanguageText,
    period: string | TLanguageText,
    employment: TLanguageText,
    position: string,
}
