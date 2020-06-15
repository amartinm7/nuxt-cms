// import MediaHandler from '../../../framework/modules/media/MediaHandler'
import StringHandler from '../../../framework/modules/string/StringHandler'

export default {
  head() {
    const vm = this
    return {
      title: `Estrenos Cine Hoy: ${vm.movies[0]._title || vm.movies[0]._name}`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Estrenos cine hoy, peliculas, series, actores, actrices, TV Shows, movies, actor, actress, movies rating, news, tv networks'
        },
        {
          hid: 'description',
          name: 'description',
          content: `${StringHandler.truncate(vm.movies[0]._overview, 100)}...`
        },
        {
          charset: 'utf-8'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Estrenos Cine Hoy: ${vm.movies[0]._title ||
            vm.movies[0]._name}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${StringHandler.truncate(vm.movies[0]._overview, 100)}...`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          // content: MediaHandler.getPosterURL(vm.movies[0]._poster_path)
          content: 'https://www.computerhope.com/jargon/j/jpg.jpg'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `www.estrenoscinehoy.com/${vm.$route.path}`
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: `estrenoscinehoy.com`
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: `${vm.$i18n.locale}`
        },
        {
          hid: 'og:image:type',
          property: 'og:image:type',
          content: 'image/jpeg'
        }
      ]
    }
  }
}
