<template>
  <div></div>
</template>
<!-- eslint-disable -->
<!-- eslint-enable -->
<script>
export default {
  // eslint-disable-next-line require-await
  async asyncData({ app, params, store, redirect }) {
    const language = store.state.language
    console.log('redirect...')
    return redirect(`/lang/${language}`)
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
