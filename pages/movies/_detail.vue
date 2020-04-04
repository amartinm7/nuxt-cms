<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <movies-card :movies="movies" class="ech-scroll-spy-effect"></movies-card>
    </section>
  </div>
</template>
<!-- eslint-disable -->
<!-- eslint-enable -->

<script>
/* eslint-disable camelcase */
import { GetMovieDetailsControllerRequest } from '../../middleware/modules/movies/getDetails/userapplication/controller/GetMovieDetailsController'
import MoviesCard from '../../components/movies/MoviesCard'
import { BeanContainerRegistry } from '../../middleware/BeanContainerRegistry'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  components: { MoviesCard },
  // eslint-disable-next-line require-await
  async asyncData({ route, params }) {
    const movie_id = params.detail.split('-')[0]
    const getMovieDetailsControllerResponse = await beanContainer.getMovieDetailsController.execute(
      new GetMovieDetailsControllerRequest({
        movie_id
      })
    )
    const movie = {
      ...getMovieDetailsControllerResponse
    }
    return { movies: [movie] }
  },
  data() {
    return {
      movie: {
        _id: 1
      }
    }
  },
  created() {},
  methods: {
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${posterPath}`
    }
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
