import MediaHandler from '../../../framework/modules/media/MediaHandler'
import StringHandler from '../../../framework/modules/string/StringHandler'

export default {
  head() {
    const { title, overview, posterPath } = {
      ...this.requestHeader
    }
    const defaultDesc =
      'Estrenos cine hoy: toda la info sobre películas, seríes, actores, actrices, TV Shows y programación. Movies, actor, actress, movies rating, news, tv networks'
    const routePath = this.$route.path
    const language = this.$i18n.locale
    const defaultTitle = title || 'EstrenosCineHoy'
    const defaultDescription = overview || defaultDesc
    const overviewDefault = overview || defaultDesc
    const defaultPosterPath =
      posterPath || 'www.estrenoscinehoy.com/manifest-icon-512.png'
    return {
      title: `${StringHandler.truncate(defaultTitle, 65)}`,
      description: defaultDescription,
      link: [
        {
          rel: 'canonical',
          href: `${routePath}`
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
          content: `${StringHandler.truncate(overviewDefault, 155)}`
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${StringHandler.truncate(defaultTitle, 35)}`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `${StringHandler.truncate(overviewDefault, 65)}`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: MediaHandler.getPoster2XURL(defaultPosterPath)
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `www.estrenoscinehoy.com${routePath}`
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: `estrenoscinehoy.com`
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
          content: `${StringHandler.truncate(overviewDefault, 65)}`
        },
        {
          hid: 'twitter:site',
          property: 'twitter:site',
          content: 'estrenoscinehoy'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${StringHandler.truncate(defaultTitle, 35)}`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `${StringHandler.truncate(overviewDefault, 65)}`
        },
        {
          hid: 'twitter:creator',
          property: 'twitter:creator',
          content: 'estrenoscinehoy'
        },
        {
          hid: 'twitter:image:src',
          property: 'twitter:image:src',
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
          content: `www.estrenoscinehoy.com${routePath}`
        }
      ]
    }
  }
}
