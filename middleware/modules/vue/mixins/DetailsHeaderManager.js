import MediaHandler from '@/middleware/framework/modules/media/MediaHandler'
import StringHandler from '@/middleware/framework/modules/string/StringHandler'
import ValuesByDefault from '@/middleware/modules/domain/ValuesByDefault'

export default {
  head() {
    const { title, overview, posterPath, jsonLD } = {
      ...this.requestHeader
    }
    const defaultDesc =
      'EstrenosCineHoy mejores estrenos netflix con nuevas series y peliculas recomendadas, estrenos hbo nuevas series y peliculas, estrenos appletv+ series, estrenos disney+ series, estrenos amazon-prime series,... !'
    const routePath =
      this.$route.path === '/es'
        ? '/'
        : this.$route.path.replace(/\/es\//g, '/').replace(/\/en\//g, '/')
    // const routePath = this.$route.path.replace(/\/en\//g, '/')
    const language = this.$i18n.locale
    const defaultTitle = title || defaultDesc
    const defaultDescription = overview || defaultDesc
    const defaultPosterPath =
      posterPath || ValuesByDefault.logoURLEstrenosCineHoy
    return {
      script: [{ type: 'application/ld+json', json: jsonLD }],
      title: `${StringHandler.truncate(defaultTitle, 65)}`,
      description: `${StringHandler.truncate(defaultDescription, 155)}`,
      link: [
        {
          rel: 'canonical',
          href: `https://www.estrenoscinehoy.com${routePath}`
        }
      ],
      htmlAttrs: {
        lang: `${language}`
      },
      meta: [
        {
          charset: 'utf-8'
        },
        {
          hid: 'title',
          name: 'title',
          content: `${StringHandler.truncate(defaultTitle, 65)}`
        },
        {
          hid: 'description',
          name: 'description',
          content: `${StringHandler.truncate(defaultDescription, 155)}`
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'og:type',
          property: 'og:section',
          content: 'movies'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${StringHandler.truncate(defaultTitle, 35)}`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `${StringHandler.truncate(defaultDescription, 65)}`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: MediaHandler.getPoster2XURL(defaultPosterPath)
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://www.estrenoscinehoy.com${routePath}`
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: `estrenoscinehoy.com`
        },
        {
          hid: 'article:publisher',
          property: 'article:publisher',
          content: `https://www.facebook.com/estrenoscinehoy`
        },
        {
          hid: 'article:tag',
          property: 'article:tag',
          content: `netflix`
        },
        {
          hid: 'article:author',
          property: 'article:author',
          content: `#estrenoscinehoy`
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: `es`
        },
        {
          hid: 'og:image:type',
          property: 'og:image:type',
          content: 'image/jpeg'
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: `${StringHandler.truncate(defaultDescription, 65)}`
        },
        {
          hid: 'twitter:site',
          property: 'twitter:site',
          content: '@estrenoscinehoy'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${StringHandler.truncate(defaultTitle, 35)}`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `${StringHandler.truncate(defaultDescription, 65)}`
        },
        {
          hid: 'twitter:creator',
          property: 'twitter:creator',
          content: '@estrenoscinehoy'
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: MediaHandler.getPoster2XURL(defaultPosterPath)
        },
        {
          hid: 'twitter:domain',
          property: 'twitter:domain',
          content: 'estrenoscinehoy.com'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: MediaHandler.getPoster2XURL(defaultPosterPath)
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `https://www.estrenoscinehoy.com${routePath}`
        }
      ]
    }
  }
}
