import type { TAboutItem } from '~/types/about';

export default defineEventHandler((): TAboutItem[] => {
  return [
    {
      ru: `Привет, меня зовут Анар, и я фронтенд-разработчик. 
        Моя страсть - создавать и развивать чистый UI/UX для моих пользователей.`,
      en: `Hi, my name is Anar, and I'm a Frontend Developer. 
        My passion is to create and develop a clean UI/UX for my users.`
    },

    {
      ru: 'В настоящее время моим основным стеком является Vue/Nuxt в сочетании с Tailwind CSS и TypeScript.',
      en: 'My main stack currently is Vue/Nuxt in combination with Tailwind CSS and TypeScript.'
    }
  ];
});
