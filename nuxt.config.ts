// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  components: {
    dirs: []
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/google-fonts'
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
      fallbackLocale: 'ru'
    }
  },

  colorMode: {
    preference: 'system',
    fallback: 'dark',
    storageKey: 'color-mode'
  },

  ui: {
    icons: ['simple-icons', 'octicon']
  },

  googleFonts: {
    preload: true,
    families: {
      Mulish: {
        wght: [300, 400, 500, 600, 700]
      }
    }
  },

  image: {
    provider: 'netlify'
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
          process.env.NODE_ENV === 'production'
            ? { preset: ['default', { discardComments: { removeAll: true } }] }
            : false // disable cssnano when not in production
    }
  }
});
