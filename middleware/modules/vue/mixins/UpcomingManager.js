export default {
  methods: {
    getSection(mediaType) {
      return this.$i18n.messages[this.$i18n.locale].pages[mediaType][
        this.$route.params.upcoming
      ]
    }
  },
  head() {
    return {
      title: `Estrenos Cine Hoy: ${this.getSection(this.mediaType)}`,
      meta: [
        {
          name: 'keywords',
          content:
            'Estrenos de cine, peliculas tvShows hoy, programacion tvShows, Movies, TV Shows, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast'
        },
        {
          charset: 'utf-8'
        }
      ]
    }
  }
}
