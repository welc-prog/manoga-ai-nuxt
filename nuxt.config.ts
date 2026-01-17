export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },

  devtools: { enabled: true },

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

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
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Manoga AI",
            "url": "https://manoga.digital",
            "description": "AI-powered digital marketing and web development agency specializing in Vibecoding, SEO, Google Ads, and AI consulting.",
            "sameAs": ["https://www.linkedin.com/in/kennethabueg/"],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+45-50-58-79-00",
              "contactType": "customer service",
              "areaServed": ["DK", "EU"],
              "availableLanguage": ["English", "Danish"]
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "DK"
            }
          })
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxtjs/i18n', '@nuxt/eslint'],

  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English', files: ['en.json'] },
      { code: 'da', language: 'da-DK', name: 'Dansk', files: ['da.json'] }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'locales',
    bundle: {
      fullInstall: false
    },
    detectBrowserLanguage: false,
    experimental: {
      // Ensure messages are fully loaded before hydration
      typedPages: false
    }
  },

  // Vue compiler options for hydration
  vue: {
    compilerOptions: {
      // Suppress hydration mismatch warnings for specific patterns
      isCustomElement: (tag) => tag.startsWith('client-only')
    },
    // Enable detailed hydration mismatch warnings in development
    config: {
      performance: true
    }
  },

  // Vite config for hydration debugging
  vite: {
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true
    }
  },

  // Experimental features for better hydration
  experimental: {
    payloadExtraction: false
  },

  routeRules: {
    '/**': { prerender: true }
  },

  compatibilityDate: '2024-11-01'
})
