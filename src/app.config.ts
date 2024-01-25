export default defineAppConfig({
  ui: {
    primary: 'indigo',
    gray: 'neutral',

    card: {
      base: '',
      background: 'dark:bg-[#1e1e1f]',
      rounded: 'rounded-3xl',
      divide: '',
      ring: 'dark:ring-gray-700',
      shadow: 'shadow-lg dark:shadow-2xl',
      body: {
        padding: 'p-4 sm:p-8'
      }
    },

    container: {
      base: 'container',
      constrained: ''
    },

    divider: {
      border: {
        base: 'dark:border-gray-700'
      }
    }
  }
});
