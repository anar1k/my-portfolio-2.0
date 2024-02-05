import type { IProject } from '~/types/project';

export default defineEventHandler((): IProject[] => {
  return [
    {
      id: 1,
      title: 'It Never Ends Ft. Julian Wilt',
      category: {
        ru: 'Song',
        en: 'Song'
      },
      description: {
        ru: 'Song',
        en: 'Song'
      },
      img: '/images/portfolio/img0.png',
      date: '2023-02',
      link: 'https://ite.aghea.site/'
    },

    {
      id: 2,
      title: 'eeeeeeeeeeeeeeeee',
      category: {
        ru: 'Song',
        en: 'Song'
      },
      description: {
        ru: 'Song',
        en: 'Song'
      },
      img: '/images/portfolio/img1.png',
      date: '2023-02',
      link: 'https://ite.aghea.site/'
    }
  ];
});
