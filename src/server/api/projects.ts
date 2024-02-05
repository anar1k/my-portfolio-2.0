import type { IProject } from '~/types/project';

export default defineEventHandler((): IProject[] => {
  return [
    {
      id: 1,
      title: 'oligamer',
      category: {
        ru: 'интернет-магазин',
        en: 'online store'
      },
      description: {
        ru: `Проект создавался для дипломной работы. Просто аккуратно оформленный набор страниц по 
          БЭМ-методологии именования CSS-селекторов.`,
        en: `The project was created for a thesis. Just a neatly designed set of pages according to the 
          BEM methodology of naming CSS selectors.`
      },
      img: '/images/portfolio/oligamer.webp',
      date: '2021-06',
      link: 'https://anar1k.github.io/oligamer/'
    },

    {
      id: 2,
      title: 'Techno shkola',
      category: {
        ru: 'Приложение',
        en: 'Application'
      },
      description: {
        ru: `Приложение для Компании Техно Школа, где представлен ассортимент различного оборудования для 
          офисов и учебных заведений.`,
        en: `An application for the Techno School Company, which presents an assortment of various equipment 
          for offices and educational institutions.`
      },
      img: '/images/portfolio/techno-shkola.webp',
      date: '2021-12',
      link: 'https://techno-shkola.ru/'
    },

    {
      id: 3,
      title: 'goojox',
      category: {
        ru: 'маркетплейс',
        en: 'marketplace'
      },
      description: {
        ru: 'Маркетплейс Goojox – это место встречи продавцов и покупателей с удобным сервисом и прозрачной оплатой.',
        en: `The Goojox marketplace is a meeting place for sellers and buyers with convenient service and 
          transparent payment.`
      },
      img: '/images/portfolio/goojox.webp',
      date: '2021-12'
    },

    {
      id: 4,
      title: 'eazydeal',
      category: {
        ru: 'интернет-магазин',
        en: 'online store'
      },
      description: {
        ru: `Платформа Eazydeal создан для помощи пользователям в поиске профессиональных мастеров по 
          строительству и ремонту, а также для размещения объявлений о строй товарах.`,
        en: `The Easydeal platform was created to help users find professional construction and repair craftsmen, 
          as well as to place ads about construction products.`
      },
      img: '/images/portfolio/eazydeal.webp',
      date: '2022-02',
      link: 'https://eazydeal.ru/'
    },

    {
      id: 5,
      title: 'Karina❤️Anar',
      category: {
        ru: 'Приложение',
        en: 'Application'
      },
      description: {
        ru: 'Приложение было создано, как приглашение на мою свадьбу.',
        en: 'The app was created as an invitation to my wedding.'
      },
      img: '/images/portfolio/wedding-invitation.webp',
      date: '2024-01',
      link: 'https://karina-anar.ru/'
    },

    {
      id: 6,
      title: 'hot lines',
      category: {
        ru: 'Приложение',
        en: 'Application'
      },
      description: {
        ru: `CRM-приложение для супервайзеров и менеджеров для отслеживания работы call-центра. Личный кабинет 
          для всего персонала. Приложения для операторов для совершения звонков с интеграцией cisco API.`,
        en: `CRM is an application for supervisors and managers to track the work of a call center. Personal account 
          for all staff. Applications for operators to make calls with Cisco API integration.`
      },
      img: '/images/portfolio/hot-lines.webp'
    }
  ];
});
