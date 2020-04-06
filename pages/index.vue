<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <div
        class="uk-position-relative uk-visible-toggle uk-light uk-width-auto"
      >
        <a
          class="uk-button uk-button-default uk-align-center"
          href="#modal-center"
          uk-toggle
        >
          <img
            src="https://image.tmdb.org/t/p/w1000_and_h563_face/6ZdQTBy20HzWudZthAV7NkZWfIb.jpg"
            alt="poster-cover"
          />
        </a>
      </div>
      <div id="modal-center" class="uk-flex-top" uk-modal>
        <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <button class="uk-modal-close-default" type="button" uk-close>
            Close
          </button>
          <iframe
            src="https://www.youtube-nocookie.com/embed/Yj0l7iGKh8g?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1"
            width="1920"
            height="1080"
            frameborder="0"
            uk-responsive
            uk-video="automute: false"
            title="main-cover"
          ></iframe>
        </div>
      </div>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ul uk-tab class="uk-flex uk-flex-around">
        <li class="uk-active ech-basic">
          <a href="#" uk-icon="icon: video-camera"></a>Trending Movies
        </li>
        <li class="ech-basic">
          <a href="#" uk-icon="icon: tv"></a>Trending TV Shows
        </li>
      </ul>
      <div class="uk-switcher">
        <div class="uk-active">
          <ech-movies-card
            :movies="trendingMovies._results"
            class="ech-scroll-spy-effect"
          ></ech-movies-card>
        </div>
        <div>
          <ech-tv-show-card
            :movies="trendingTVShows._results"
            class="ech-scroll-spy-effect"
          ></ech-tv-show-card>
        </div>
      </div>
    </section>
  </div>
</template>
<!-- eslint-disable -->
<!-- eslint-enable -->

<script>
import EchMoviesCard from '../components/movies/EchMoviesCard'
import EchTvShowCard from '../components/movies/EchTvShowCard'
import { BeanContainerRegistry } from '../middleware/BeanContainerRegistry'
const beanContainer = BeanContainerRegistry.getBeanContainer()
const _isEmpty = require('lodash.isempty')

export default {
  components: { EchTvShowCard, EchMoviesCard },
  // eslint-disable-next-line require-await
  async asyncData({ app, params, store }) {
    const language = store.state.language
    const getTrendingMoviesResponse = await beanContainer.getTrendingMoviesController.getTrendingMovies(
      { language }
    )
    const trendingMovies = {
      ...getTrendingMoviesResponse
    }
    const getTrendingTVShowsResponse = await beanContainer.getTrendingMoviesController.getTrendingTVShows(
      { language }
    )
    const trendingTVShows = {
      ...getTrendingTVShowsResponse
    }

    const cachedTrendingMovies = {}
    cachedTrendingMovies[language] = trendingMovies
    const cachedTrendingTVShows = {}
    cachedTrendingTVShows[language] = trendingTVShows

    return {
      trendingMovies,
      trendingTVShows,
      cachedTrendingMovies,
      cachedTrendingTVShows
    }
  },
  data() {
    return {
      trendingMovies: {
        _page: 1,
        _total_pages: 1,
        _total_results: 1,
        _results: []
      },
      trendingTVShows: {
        _page: 1,
        _total_pages: 1,
        _total_results: 1,
        _results: []
      },
      cachedTrendingMovies: {},
      cachedTrendingTVShows: {}
    }
  },
  watch: {
    '$store.state.language'(newValue, oldValue) {
      console.log('changing language ' + newValue + ' ' + oldValue)
      const language = newValue
      if (newValue !== oldValue) {
        this.getTrendingMovies({ language })
        this.getTrendingMoviesTvShows({ language })
      }
    }
  },
  created() {},
  methods: {
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${posterPath}`
    },
    async getTrendingMovies({ language }) {
      if (!_isEmpty(this.cachedTrendingMovies[language])) {
        this.trendingMovies = this.cachedTrendingMovies[language]
        return
      }
      console.log('getTrendingMovies...')
      const getTrendingMoviesResponse = await beanContainer.getTrendingMoviesController.getTrendingMovies(
        { language }
      )
      this.cachedTrendingMovies[language] = { ...getTrendingMoviesResponse }
      this.trendingMovies = this.cachedTrendingMovies[language]
    },
    async getTrendingMoviesTvShows({ language }) {
      if (!_isEmpty(this.cachedTrendingTVShows[language])) {
        this.trendingTVShows = this.cachedTrendingTVShows[language]
        return
      }
      console.log('getTrendingMoviesTvShows...')
      const getTrendingTVShowsResponse = await beanContainer.getTrendingMoviesController.getTrendingTVShows(
        { language }
      )
      this.cachedTrendingTVShows[language] = { ...getTrendingTVShowsResponse }
      this.trendingTVShows = this.cachedTrendingTVShows[language]
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
