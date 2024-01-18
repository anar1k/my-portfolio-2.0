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
  }
});
