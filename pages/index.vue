<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <div class="uk-position-relative uk-visible-toggle uk-light">
        <a class="uk-button uk-button-default" href="#modal-center" uk-toggle>
          <img
            src="https://image.tmdb.org/t/p/w1000_and_h563_face/6ZdQTBy20HzWudZthAV7NkZWfIb.jpg"
          />
        </a>
      </div>
      <div id="modal-center" class="uk-flex-top" uk-modal>
        <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <button
            class="uk-modal-close-default"
            type="button"
            uk-close
          ></button>
          <iframe
            src="https://www.youtube-nocookie.com/embed/Yj0l7iGKh8g?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1"
            width="1920"
            height="1080"
            frameborder="0"
            uk-responsive
            uk-video="automute: false"
          ></iframe>
        </div>
      </div>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ul uk-tab class="uk-flex uk-flex-around">
        <li class="uk-active"><a href="#" uk-icon="icon: copy"></a>Movies</li>
        <li><a href="#" uk-icon="icon: heart"></a>TV</li>
      </ul>
      <div class="uk-switcher">
        <div class="uk-active">
          <movies-card
            :movies="trendingMovies._results"
            class="ma-scroll-spy-effect"
          ></movies-card>
        </div>
        <div>
          <movies-card
            :movies="trendingTVs._results"
            class="ma-scroll-spy-effect"
          ></movies-card>
        </div>
      </div>
    </section>
    <amazon-banner></amazon-banner>
  </div>
</template>
<!-- eslint-disable -->
<!-- eslint-enable -->

<script>
import {
  GetTrendingMoviesRepository,
  GetTrendingMoviesRepositoryRequest
} from '../middleware/framework/repository/trending/GetTrending/GetTrendingMoviesRepository'
import {
  MEDIA_TYPES,
  TIME_WINDOWS_TYPES
} from '../middleware/adomain/trending/TrendingTypes'
import AmazonBanner from '../components/amazon/AmazonBanner'
import MoviesCard from '../components/movies/moviesCard'
const axios = require('axios')
const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWUzMTJmMzMwZTkwOTk0OWZiNmIwNDViN2VhYmE2NSIsInN1YiI6IjVlNmJkMmMyY2VkYWM0MDAxNzQ5NjJlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YEVmEFcunK4clG1KuUXQm9msRV70n5hF1e9ozfIMjbc`

export default {
  components: { MoviesCard, AmazonBanner },
  data() {
    return {
      trendingMovies: {
        _page: 1,
        _total_pages: 1,
        _total_results: 1,
        _results: []
      },
      trendingTVs: {
        _page: 1,
        _total_pages: 1,
        _total_results: 1,
        _results: []
      }
    }
  },
  created() {},
  // eslint-disable-next-line require-await
  async mounted() {
    console.log('>>>init ')
    this.getTrendingMovies()
    this.getTrendingTVs()
  },
  methods: {
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${posterPath}`
    },
    async getTrendingMovies() {
      const getTrendingMoviesRepositoryResponse = await new GetTrendingMoviesRepository(
        { axios, accessToken }
      ).executeAsync(
        new GetTrendingMoviesRepositoryRequest({
          mediaType: MEDIA_TYPES.MOVIE,
          timeWindow: TIME_WINDOWS_TYPES.WEEK
        })
      )
      this.trendingMovies = {
        ...getTrendingMoviesRepositoryResponse
      }
    },
    async getTrendingTVs() {
      const getTrendingMoviesRepositoryResponse = await new GetTrendingMoviesRepository(
        { axios, accessToken }
      ).executeAsync(
        new GetTrendingMoviesRepositoryRequest({
          mediaType: MEDIA_TYPES.TV,
          timeWindow: TIME_WINDOWS_TYPES.WEEK
        })
      )
      this.trendingTVs = {
        ...getTrendingMoviesRepositoryResponse
      }
    }
  },
  head() {
    return {
      title: 'Estrenos Cine Hoy',
      meta: [
        {
          name: 'keywords',
          content:
            'Estrenos de cine, peliculas tv hoy, programacion tv, Movies, TV Shows, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast'
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
