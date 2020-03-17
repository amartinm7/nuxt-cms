<template>
  <div>
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
      title: 'Cinemotion movies news',
      meta: [
        {
          name: 'keywords',
          content:
            'Movies, TV Shows, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast'
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
