export default {
  mode: 'universal',
  /**
   * https://nuxtjs.org/api/configuration-env/
   * Note that Nuxt uses webpack's definePlugin to define the environmental variable. This means that the actual process or process.env from Node.js is neither available nor defined. Each of the env properties defined in nuxt.config.js is individually mapped to process.env.xxxx and converted during compilation.
   */
  env: {
    ESTRENOSCINEHOY_FIRESTORE_CONFIG:
      process.env.ESTRENOSCINEHOY_FIRESTORE_CONFIG,
    ESTRENOSCINEHOY_THEMOVIEDB_CONFIG:
      process.env.ESTRENOSCINEHOY_THEMOVIEDB_CONFIG
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || 'Estrenos Cine Hoy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'estrenoscinehoy',
        name: 'Estrenos Cine Hoy',
        content:
          process.env.npm_package_description ||
          'Estrenos de cine, peliculas tvShows hoy, programacion tvShows, Movies, TV Shows, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast'
      },
      { name: 'apple-mobile-web-app-capable', content: 'yes' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Staatliches'
      }
    ]
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
  plugins: [{ src: '~/plugins/uikit.js', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/sitemap'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-i18n'
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
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        langFile: 'en.json'
      },
      {
        code: 'es',
        iso: 'es-ES',
        name: 'Español',
        langFile: 'es.json'
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
    langDir: 'lang/'
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
  }
  /**
  generate: {
    routes: ['/es', '/en', '/es/movies', '/en/movies']
  }
   */
}
