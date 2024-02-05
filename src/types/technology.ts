import type { TLanguageText } from '~/types/language';
import type { TIcon } from '~/types/icon';

export interface ITechnology {
    id: number,
    title: string,
    description: TLanguageText,
    icon: TIcon,
    iconColor: string
}
