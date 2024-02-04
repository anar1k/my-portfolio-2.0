import type { ITechnology } from '~/types/technology';

export default defineEventHandler((): ITechnology[] => {
  return [
    {
      id: 1,
      title: 'Vue',
      description: {
        ru: 'Я создаю современные и продвинутые веб-сайты и приложения, используя фреймворк Vue.',
        en: 'I build modern and advanced websites and applications using the Vue framework.'
      },
      icon: 'i-simple-icons-vuedotjs',
      iconColor: '#4FC08D'
    },

    {
      id: 2,
      title: 'Nuxt',
      description: {
        ru: 'Для приложений SSR я также использую Nuxt.',
        en: 'For the SSR application, I also use Nuxt.'
      },
      icon: 'i-simple-icons-nuxtdotjs',
      iconColor: '#00DC82'
    },

    {
      id: 3,
      title: 'TypeScript',
      description: {
        ru: `Я использую TypeScript для разработки и поддержки кода 
          приложений JavaScript, путем добавления статической типизации.`,
        en: 'I use TypeScript to develop and maintain JavaScript application code by adding static typing.'
      },
      icon: 'i-simple-icons-typescript',
      iconColor: '#3178C6'
    },

    {
      id: 4,
      title: 'Tailwind CSS',
      description: {
        ru: `Я использую Tailwind CSS для быстрой и простой разработки пользовательского
          интерфейса веб-приложений, с использованием набора предварительно разработанных классов.`,
        en: `I use Tailwind CSS to quickly and easily develop the user interface of web applications 
          using a set of pre-designed classes.`
      },
      icon: 'i-simple-icons-tailwindcss',
      iconColor: '#06B6D4'
    }
  ];
});
