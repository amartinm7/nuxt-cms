import { commandActions } from './store/commandActions/commandActionsStore'
import MediaTypes from './middleware/modules/domain/MediaTypes'

const dynamicRoutes = () => {
  // fetching tvs
  const routesForTv = Object.keys(commandActions[MediaTypes.tv]).map(
    (action) => {
      return {
        route: `/${MediaTypes.tv}/${action}`,
        payload: action
      }
    }
  )
  // fetching movie - watch it
  const routesForMovies = Object.keys(commandActions[MediaTypes.movie]).map(
    (action) => {
      return {
        route: `/${MediaTypes.movie}/${action}`,
        payload: action
      }
    }
  )
  return routesForTv.concat(routesForMovies)
}

export default {
  /**
   * https://nuxtjs.org/api/configuration-env/
   * Note that Nuxt uses webpack's definePlugin to define the environmental variable. This means that the actual process or process.env from Node.js is neither available nor defined. Each of the env properties defined in nuxt.config.js is individually mapped to process.env.xxxx and converted during compilation.
   */
  env: {
    HOST_NAME: 'https://www.estrenoscinehoy.com',
    ESTRENOSCINEHOY_FIRESTORE_CONFIG:
      process.env.ESTRENOSCINEHOY_FIRESTORE_CONFIG,
    ESTRENOSCINEHOY_THEMOVIEDB_CONFIG:
      process.env.ESTRENOSCINEHOY_THEMOVIEDB_CONFIG,
    ESTRENOSCINEHOY_GOOGLE_ANALITYCS_ID:
      process.env.ESTRENOSCINEHOY_GOOGLE_ANALITYCS_ID || '',
    ESTRENOSCINEHOY_GOOGLE_ADS_ID:
      process.env.ESTRENOSCINEHOY_GOOGLE_ADS_ID || ''
  },
  /*
   ** Headers of the page
   */
  head: {
    meta: [
      { 'http-equiv': 'pragma', content: 'no-cache' },
      { 'http-equiv': 'cache-control', content: 'no-cache' },
      { 'http-equiv': 'expires', content: '0' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: 'currentcolor' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/x-icon',
        href: '/manifest-icon-512.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        type: 'image/x-icon',
        href: '/manifest-icon-512.png'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Staatliches'
      }
    ],
    script: [
      {
        // for google ads
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        'data-ad-client': process.env.ESTRENOSCINEHOY_GOOGLE_ADS_ID,
        async: true
      }
    ]
  },
  /*
   ** Really important, scroll to top everytime you move to another link
   */
  router: {
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'uikit/dist/css/uikit.min.css',
    'uikit/dist/css/uikit.css',
    '@assets/css/main.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/uikit.js', ssr: false },
    { src: '~/plugins/vuikit.js', ssr: false },
    { src: '~/plugins/vue-moment.js', ssr: true },
    { src: '~/plugins/disqus', ssr: true },
    { src: '~/plugins/axios', ssr: true },
    { src: '~/plugins/genreActions', ssr: true },
    { src: '~/plugins/currency', ssr: true },
    { src: '~/plugins/vueStarsRating', ssr: false },
    { src: '~/plugins/http', ssr: true }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.ESTRENOSCINEHOY_GOOGLE_ANALITYCS_ID
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-i18n',
    '@nuxtjs/robots',
    '~modules/custom-generate.js',
    'vue-social-sharing/nuxt',
    '@nuxt/http'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** i18n
   */
  i18n: {
    lazy: true,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.js'
      },
      {
        code: 'es',
        iso: 'es-ES',
        name: 'Español',
        file: 'es.js'
      }
    ],
    rootRedirect: 'es',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'ech_i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'es'
    },
    defaultLocale: 'es',
    strategy: 'prefix_and_default',
    loadLanguagesAsync: true,
    langDir: 'locales/'
  },
  /**
   * to avoid cache the htmls pages
   */
  serverMiddleware: ['~/api/Logger.js', '~/api/CleanCacheHeaders.js'],
  /**
   * google robots
   */
  robots: {
    UserAgent: '*',
    Disallow: '/setup-these-routes-to-disallow-or-allow'
  },
  /**
   * sitemap module
   */
  sitemap: {
    hostname: 'https://www.estrenoscinehoy.com'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    // routes: ['/es', '/en', '/es/movie', '/en/movie']
    routes: dynamicRoutes(),
    fallback: true,
    exclude: [/^(?=.*\bignore\b).*$/]
  }
}
