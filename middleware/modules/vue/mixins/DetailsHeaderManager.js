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
          content: defaultTitle
        },
        {
          hid: 'description',
          name: 'description',
          content: `${StringHandler.truncate(overviewDefault, 155)}`
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${StringHandler.truncate(defaultTitle, 35)}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${StringHandler.truncate(overviewDefault, 65)}`
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: MediaHandler.getPosterURL(defaultPosterPath)
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
          hid: 'twitter:image',
          name: 'twitter:image',
          content: MediaHandler.getPosterURL(defaultPosterPath)
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `www.estrenoscinehoy.com${routePath}`
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: MediaHandler.getPosterURL(defaultPosterPath)
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `www.estrenoscinehoy.com${routePath}`
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: `estrenoscinehoy.com`
        },
        {
          hid: 'og:locale',
          name: 'og:locale',
          content: `${language}`
        },
        {
          hid: 'og:image:type',
          name: 'og:image:type',
          content: 'image/jpeg'
        }
      ]
    }
  }
}
