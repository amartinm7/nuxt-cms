<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-slider-main
        :movies="trendingMovies._results"
        class="ech-scroll-spy-effect"
      ></ech-slider-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ul uk-tab class="uk-flex uk-flex-around">
        <li class="uk-active ech-basic">
          <a href="#" uk-icon="icon: video-camera"></a>Trending Movies
        </li>
        <li class="ech-basic">
          <a href="#" uk-icon="icon: tv"></a>
          Trending TV Shows
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
/* eslint-disable camelcase, no-console */
import EchTvShowCard from '../components/movies/EchTvShowCard'
import EchMoviesCard from '../components/movies/EchMoviesCard'
import { BeanContainerRegistry } from '../middleware/BeanContainerRegistry'
import EchSliderMain from '../components/slider/EchSliderMain'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  components: { EchSliderMain, EchTvShowCard, EchMoviesCard },
  // eslint-disable-next-line require-await
  async asyncData({ app, params, store }) {
    const language = app.i18n.locale
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
    return { trendingMovies, trendingTVShows }
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
      title: this.$i18n.messages[this.$i18n.locale].seo.index,
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
