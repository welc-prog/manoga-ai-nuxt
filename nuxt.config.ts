export default defineNuxtConfig({
  devtools: { enabled: true },

  site: {
    url: 'https://manoga.digital',
    name: 'Manoga AI'
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxtjs/i18n'],

  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English', files: ['en.json'] },
      { code: 'da', language: 'da-DK', name: 'Dansk', files: ['da.json'] }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    lazy: true,
    bundle: {
      fullInstall: false
    },
    detectBrowserLanguage: false
  },

  routeRules: {
    '/': { prerender: true },
    '/da': { prerender: true },
    '/da/**': { prerender: true },
    '/**': { prerender: true }
  },

  compatibilityDate: '2024-11-01'
})
