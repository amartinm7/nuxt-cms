<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-movies-card
        :movies="movies"
        class="ech-scroll-spy-effect"
      ></ech-movies-card>
    </section>
    <section class="uk-section uk-section-xsmall"></section>
  </div>
</template>
<!-- eslint-disable -->
<!-- eslint-enable -->

<script>
/* eslint-disable camelcase, no-console */
import EchMoviesCard from '../../../components/movies/EchMoviesCard'
import { BeanContainerRegistry } from '../../../middleware/BeanContainerRegistry'
import { GetMovieDetailsControllerRequest } from '../../../middleware/modules/movies/getDetails/userapplication/controller/GetMovieDetailsController'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  scrollToTop: true,
  components: { EchMoviesCard },
  // eslint-disable-next-line require-await
  async asyncData({ app, route, params, store }) {
    const language = app.i18n.locale
    const movie_id = params.details.split('-')[0]
    const getMovieDetailsControllerResponse = await beanContainer.getMovieDetailsController.execute(
      new GetMovieDetailsControllerRequest({ movie_id, language })
    )
    const movie = {
      ...getMovieDetailsControllerResponse
    }
    return {
      movies: [movie]
    }
  },
  data() {
    return {
      movies: [],
      movie_title: '',
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
      title: `${vm.movies[0]._title}`,
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
