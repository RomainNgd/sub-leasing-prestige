// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    'motion-v/nuxt',
    '@nuxtjs/seo',
  ],

  css: ['~/assets/css/main.css'],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'fr',
      },
      titleTemplate: '%s - Subleasing',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0E2044' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
    },
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://subleasing.example.com',
    name: 'Sub Leasing Prestige',
    description: 'Gestion locative premium avec loyer garanti et sous-location professionnelle.',
    defaultLocale: 'fr',
  },

  routeRules: {
    '/': { prerender: true },
    '/mentions-legales': { prerender: true },
    '/robots.txt': { prerender: true },
    '/sitemap.xml': { prerender: true },
  },

  nitro: {
    prerender: {
      routes: ['/', '/mentions-legales', '/robots.txt', '/sitemap.xml'],
    },
  },

  robots: {
    allow: '/',
    sitemap: '/sitemap.xml',
    credits: false,
  },

  sitemap: {
    minify: true,
    autoLastmod: true,
    discoverImages: false,
    discoverVideos: false,
    xsl: false,
    zeroRuntime: true,
    credits: false,
    urls: [
      {
        loc: '/',
        changefreq: 'monthly',
        priority: 1,
      },
    ],
    exclude: ['/mentions-legales'],
  },

  image: {
    format: ['avif', 'webp'],
    quality: 80,
    screens: {
      xs: 360,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },

  motionV: {
    directives: true,
  },

  ui: {
    fonts: false,
    theme: {
      colors: ['primary', 'secondary', 'success', 'info', 'warning', 'error'],
    },
  },
})
