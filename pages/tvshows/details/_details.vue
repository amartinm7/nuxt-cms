<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-tv-show-card
        :movies="movies"
        class="ech-scroll-spy-effect"
      ></ech-tv-show-card>
    </section>
    <section class="uk-section uk-section-xsmall"></section>
  </div>
</template>
<!-- eslint-disable -->
<!-- eslint-enable -->
<script>
/* eslint-disable camelcase, no-console */
import { BeanContainerRegistry } from '../../../middleware/BeanContainerRegistry'
import EchTvShowCard from '../../../components/movies/EchTvShowCard'
import { GetTvShowDetailsControllerRequest } from '../../../middleware/modules/tvShows/getDetails/userapplication/controller/GetTvShowDetailsController'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  scrollToTop: true,
  components: { EchTvShowCard },
  // eslint-disable-next-line require-await
  async asyncData({ app, route, params, store }) {
    const language = app.i18n.locale
    const movie_id = params.details.split('-')[0]
    const getTvShowDetailsControllerResponse = await beanContainer.getTvShowDetailsController.execute(
      new GetTvShowDetailsControllerRequest({ movie_id, language })
    )
    const movie = {
      ...getTvShowDetailsControllerResponse
    }
    return {
      movies: [movie]
    }
  },
  data() {
    return {
      movies: [],
      movie_name: '',
      movie_id: 0
    }
  },
  methods: {
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${posterPath}`
    }
  },
  head() {
    const vm = this
    return {
      title: `${vm.movies[0]._name}`,
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
