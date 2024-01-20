// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Anar1k DEV',

      htmlAttrs: {
        lang: 'ru'
      }
    }
  },

  components: {
    dirs: []
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
    '@nuxtjs/i18n',
    '@nuxt/ui'
  ],

  srcDir: 'src/',

  typescript: {
    strict: true
  },

  eslint: {
    failOnError: true
  },

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en-US.json'
      },
      {
        code: 'ru',
        name: 'Russia',
        file: 'ru-RU.json'
      }
    ],

    langDir: './locales',
    defaultLocale: 'ru',
    strategy: 'no_prefix',

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'lang',
      alwaysRedirect: false,
      fallbackLocale: 'ru'
    }
  },

  colorMode: {
    preference: 'system',
    fallback: 'dark',
    storageKey: 'color-mode'
  }
});
