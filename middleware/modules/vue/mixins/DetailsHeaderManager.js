import MediaHandler from '../../../framework/modules/media/MediaHandler'
import StringHandler from '../../../framework/modules/string/StringHandler'

export default {
  head() {
    const vm = this
    const title = vm.movies[0]._title || vm.movies[0]._name
    const desc =
      'Estrenos cine hoy, peliculas, series, actores, actrices, TV Shows, movies, actor, actress, movies rating, news, tv networks'
    return {
      title: `${StringHandler.truncate(title, 65)}`,
      description: desc,
      link: [
        {
          rel: 'canonical',
          href: `www.estrenoscinehoy.com${vm.$route.path}`
        }
      ],
      htmlAttrs: {
        lang: `${vm.$i18n.locale}`
      },
      meta: [
        {
          charset: 'utf-8'
        },
        {
          hid: 'title',
          name: 'title',
          content: title
        },
        {
          hid: 'description',
          name: 'description',
          content: `${StringHandler.truncate(vm.movies[0]._overview, 155)}`
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${StringHandler.truncate(title, 35)}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${StringHandler.truncate(vm.movies[0]._overview, 65)}`
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: MediaHandler.getPosterURL(vm.movies[0]._poster_path)
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${StringHandler.truncate(title, 35)}`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `${StringHandler.truncate(vm.movies[0]._overview, 65)}`
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: MediaHandler.getPosterURL(vm.movies[0]._poster_path)
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `www.estrenoscinehoy.com${vm.$route.path}`
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: MediaHandler.getPosterURL(vm.movies[0]._poster_path)
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `www.estrenoscinehoy.com${vm.$route.path}`
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: `estrenoscinehoy.com`
        },
        {
          hid: 'og:locale',
          name: 'og:locale',
          content: `${vm.$i18n.locale}`
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
