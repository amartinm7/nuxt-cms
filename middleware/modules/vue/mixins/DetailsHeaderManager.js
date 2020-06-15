export default {
  head() {
    const vm = this
    return {
      title: `Estrenos Cine Hoy: ${vm.movies[0]._title || vm.movies[0]._name}`,
      meta: [
        {
          name: 'keywords',
          content:
            'Estrenos de cine, peliculas tvShows hoy, programacion tvShows, Movies, TV Shows, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast'
        },
        {
          charset: 'utf-8'
        },
        {
          name: 'og:description',
          content: 'xxxxxx'
        },
        {
          property: 'og:title',
          content: 'title....'
        },
        {
          property: 'og:image',
          content:
            'https://image.tmdb.org/t/p/w185_and_h278_bestv2/w58ohFF2YeEEVYRWiiMjJZ1hk9R.jpg'
        }
      ]
    }
  }
}
