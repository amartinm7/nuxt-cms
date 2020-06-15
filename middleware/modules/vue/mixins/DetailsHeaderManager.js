import MediaHandler from '../../../framework/modules/media/MediaHandler'
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
            'Estrenos de cine, peliculas tvShows hoy, programacion tvShows, Movies, TV Shows, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast'
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
          content: MediaHandler.getPosterURL(vm.movies[0]._poster_path)
        }
      ]
    }
  }
}
