<!-- eslint-disable -->
<template>
  <div class="container">
    dsfsdfdasf
    <article class="uk-comment" v-for="(movie, index) in getTrending()" v-bind:todo="movie" v-bind:key="movie.id">
      <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
        <div class="uk-card-media-left uk-cover-container">
          <img :src="getPosterURL(movie.poster_path)" alt="" uk-cover>
          <canvas width="600" height="400"></canvas>
        </div>
        <div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">{{movie.title}}</h3>
            <p>{{movie.description}}</p>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
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
const axios = require('axios')
const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWUzMTJmMzMwZTkwOTk0OWZiNmIwNDViN2VhYmE2NSIsInN1YiI6IjVlNmJkMmMyY2VkYWM0MDAxNzQ5NjJlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YEVmEFcunK4clG1KuUXQm9msRV70n5hF1e9ozfIMjbc`

export default {
  head() {
    return {
      /* eslint-disable */
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  },
  data: function () {
    return {}
  },
  methods: {
    getPosterURL: function(posterPath){
      return  `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${posterPath}`
    },
    getTrending: async function(){
      const getTrendingMoviesRepositoryResponse = await new GetTrendingMoviesRepository(
        { axios, accessToken }
      ).execute(
        new GetTrendingMoviesRepositoryRequest({
          mediaType: MEDIA_TYPES.MOVIE,
          timeWindow: TIME_WINDOWS_TYPES.WEEK
        })
      )
      return getTrendingMoviesRepositoryResponse
    }
  },
  created() {
  },
  mounted: async function () {
    console.log(">>>init ")
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
