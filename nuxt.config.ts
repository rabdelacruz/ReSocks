// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],

  site: {
    url: 'https://resocks.app',
    name: 'ReSocks',
  },

  sitemap: {
    excludeAppSources: ['@nuxt/content@v3:urls'],
    sources: ['/api/__sitemap__/docs'],
    defaults: {
      changefreq: 'weekly',
      priority: 0.7,
    },
  },

  content: {
    highlight: {
      theme: 'github-dark',
      langs: ['bash', 'sh', 'javascript', 'typescript', 'json', 'yaml', 'markdown'],
    },
  },

  css: ['~/assets/css/main.css'],

  i18n: {
    baseUrl: 'https://resocks.app',
    locales: [
      { code: 'zh', language: 'zh-CN', name: '中文', file: 'zh.ts' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.ts' },
    ],
    lazy: false,
    langDir: 'locales/',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'en',
    },
    bundle: {
      optimizeTranslationDirective: false
    },
    vueI18n: 'i18n.config.ts'
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'ReSocks - Relay your SOCKS5 proxy anywhere | SOCKS5二次代理工具，随地中转你的SOCKS5代理',
      meta: [
        { name: 'description', content: 'ReSocks is a SOCKS5 relay (secondary proxy) tool with multi-platform support. Using TLS relay technology, it helps you securely and reliably use your own SOCKS5 proxy in restricted network environments, bypassing regional limits. Supports TUN and system proxy dual mode, per-app and per-site routing.' },
        { name: 'keywords', content: 'ReSocks, SOCKS5 proxy, SOCKS5 relay, SOCKS5 secondary proxy, TLS relay, proxy relay tool, proxy forwarding, VPN, TUN mode, system proxy, per-app routing, per-site routing, macOS proxy, Windows proxy, Linux VPN, iOS proxy, Android VPN, HarmonyOS proxy' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'ReSocks' },
        { property: 'og:title', content: 'ReSocks - Relay your SOCKS5 proxy anywhere' },
        { property: 'og:description', content: 'ReSocks is a SOCKS5 relay tool that helps you securely and reliably use your own SOCKS5 proxy via TLS relay technology, bypassing regional limits. Supports TUN and system proxy dual mode, smart per-app/site routing.' },
        { property: 'og:image', content: '/images/favicon.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'ReSocks - Relay your SOCKS5 proxy anywhere' },
        { name: 'twitter:description', content: 'SOCKS5 relay tool using TLS relay technology to securely and reliably use your own SOCKS5 proxy, bypassing regional limits. TUN/system proxy dual mode, multi-platform support.' },
        { name: 'author', content: 'ReSocks' },
        { name: 'robots', content: 'index, follow' },
        { name: 'language', content: 'en-US' },
        { name: 'theme-color', content: '#b8860b' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' },
        { rel: 'canonical', href: 'https://resocks.app' }
      ]
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
    },
    minify: true
  },

  routeRules: {
    '/docs/**': { trailingSlash: false }
  }
})
