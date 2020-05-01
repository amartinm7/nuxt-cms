<template>
  <div></div>
</template>
<!-- eslint-disable -->
<!-- eslint-enable -->
<script>
/* eslint-disable camelcase, no-console */
export default {
  // eslint-disable-next-line require-await
  async asyncData({ app, params, store, redirect }) {
    console.log('redirect...' + app.i18n.locale)
    // const languageCode = app.i18n.locale
    // return redirect(`/${languageCode}/movies`)
  },
  head() {
    return {
      title: 'Estrenos Cine Hoy',
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
</script>
<style></style>
