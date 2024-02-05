import { ITimelineItem } from '~/types/timeline';

export default defineEventHandler((): ITimelineItem[] => {
  return [
    {
      id: 1,
      title: {
        en: 'Private practice',
        ru: 'Частная практика'
      },
      period: '02.2021 — 06.2021',
      employment: {
        ru: 'Удаленно',
        en: 'Remote'
      },
      position: 'Junior Frontend developer'
    },

    {
      id: 2,
      title: {
        en: 'Individual entrepreneurship / freelance',
        ru: 'Индивидуальное предпринимательство / фриланс'
      },
      period: '06.2021 - 10.2021',
      employment: {
        ru: 'Удаленно',
        en: 'Remote'
      },
      position: 'Junior Frontend developer'
    },

    {
      id: 3,
      title: 'Echo company',
      period: '10.2021 — 02.2022',
      employment: {
        ru: 'Офис/Удаленно',
        en: 'Office/Remote'
      },
      position: 'Frontend developer'
    },

    {
      id: 4,
      title: 'Hot lines',
      period: {
        ru: '03.2022 — по настоящее время',
        en: '03.2022 — present'
      },
      employment: {
        ru: 'Удаленно',
        en: 'Remote'
      },
      position: 'Frontend developer'
    }
  ];
});
