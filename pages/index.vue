<template>
  <div>
    <amazon-banner></amazon-banner>
    <article
      v-for="(movie, index) in getTrendingResponse._results"
      :key="movie._id"
      :todo="movie"
      class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
      uk-grid
    >
      <div
        class="uk-card-media-left uk-cover-container"
        style="width: 185px; height: 278px;"
      >
        <img :src="getPosterURL(movie._poster_path, index)" alt="" uk-cover />
        <canvas></canvas>
      </div>
      <div>
        <div class="uk-card-body">
          <h3 class="uk-card-title">{{ movie._title }}</h3>
          <p>{{ movie._overview }}</p>
        </div>
      </div>
    </article>
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
const axios = require('axios')
const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWUzMTJmMzMwZTkwOTk0OWZiNmIwNDViN2VhYmE2NSIsInN1YiI6IjVlNmJkMmMyY2VkYWM0MDAxNzQ5NjJlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YEVmEFcunK4clG1KuUXQm9msRV70n5hF1e9ozfIMjbc`

export default {
  components: { AmazonBanner },
  data() {
    return {
      getTrendingResponse: {
        page: 1,
        total_pages: 1,
        total_results: 1,
        results: {}
      }
    }
  },
  created() {},
  // eslint-disable-next-line require-await
  async mounted() {
    console.log('>>>init ')
    this.getTrending()
  },
  methods: {
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${posterPath}`
    },
    async getTrending() {
      const getTrendingMoviesRepositoryResponse = await new GetTrendingMoviesRepository(
        { axios, accessToken }
      ).executeAsync(
        new GetTrendingMoviesRepositoryRequest({
          mediaType: MEDIA_TYPES.MOVIE,
          timeWindow: TIME_WINDOWS_TYPES.WEEK
        })
      )
      this.getTrendingResponse = { ...getTrendingMoviesRepositoryResponse }
      console.log(JSON.stringify(this.getTrendingResponse))
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
