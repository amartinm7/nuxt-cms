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
      },
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-icon-180.png' },
      { rel: 'apple-touch-icon', sizes: '167x167', href: 'apple-icon-167.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: 'apple-icon-152.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: 'apple-icon-120.png' },
      {
        rel: 'apple-touch-startup-image',
        href: 'apple-splash-2048-2732.png',
        media:
          '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'apple-splash-2732-2048.png',
        media:
          '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'apple-splash-1668-2388.png',
        media:
          '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'apple-splash-2388-1668.png',
        media:
          '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'apple-splash-1668-2224.png',
        media:
          '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'apple-splash-2224-1668.png',
        media:
          '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'apple-splash-1536-2048.png',
        media:
          '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'apple-splash-2048-1536.png',
        media:
          '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'apple-splash-1242-2688.png',
        media:
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'apple-splash-2688-1242.png',
        media:
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'apple-splash-1125-2436.png',
        media:
          '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'apple-splash-2436-1125.png',
        media:
          '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'apple-splash-828-1792.png',
        media:
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'apple-splash-1792-828.png',
        media:
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'apple-splash-1242-2208.png',
        media:
          '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'apple-splash-2208-1242.png',
        media:
          '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'apple-splash-750-1334.png',
        media:
          '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'apple-splash-1334-750.png',
        media:
          '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'apple-splash-640-1136.png',
        media:
          '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'apple-splash-1136-640.png',
        media:
          '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
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
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /** markdownit */
  markdownit: {
    injected: true
  },
  /*
   ** PWA module configuration
   ** See https://pwa.nuxtjs.org/modules/manifest.html, https://developer.mozilla.org/en-US/docs/Web/Manifest
   */
  pwa: {
    icon: {
      srcDir: '../icon.png'
    },
    manifest: {
      name: 'Estrenos Cine Hoy',
      short_name: 'Estrenos Cine Hoy',
      description: 'Estrenos Cine Hoy: movies, TV Shows and so on...',
      lang: 'es-ES',
      start_url: '/',
      theme_color: '#0598EC',
      icons: [
        {
          src: '../manifest-icon-192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable any'
        },
        {
          src: '../manifest-icon-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable any'
        }
      ]
    }
  },
  /**
   * sitemap module
   */
  sitemap: {
    hostname: 'https://estrenoscinehoy.com'
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
  /** */
  generate: {
    routes() {
      const fs = require('fs')
      const path = require('path')
      return fs.readdirSync('./assets/content/blog').map((file) => {
        return {
          route: `/blog/${path.parse(file).name}`, // Return the slug
          payload: require(`./assets/content/blog/${file}`)
        }
      })
    }
  }
}
