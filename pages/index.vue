<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-header-main
        @outbound-open-video-modal="playVideoURL"
      ></ech-header-main>
      <ech-video-frame-x
        :url="url"
        @clear-video-url="clearVideoURL"
      ></ech-video-frame-x>
    </section>
    <section class="uk-section uk-section-xsmall">
      <div class="uk-active">
        <ech-slider-main
          :movies="trendingResults._results"
          :media-type="mediaType"
          class="ech-scroll-spy-effect"
        ></ech-slider-main>
      </div>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ul id="ech-tab" uk-tab class="uk-flex uk-flex-around">
        <li class="uk-active ech-basic">
          <a href="#" uk-icon="icon: video-camera"></a
          >{{ $t('switcher.trendingMovies') }}
        </li>
        <li class="ech-basic">
          <a href="#" uk-icon="icon: tv"></a
          >{{ $t('switcher.trendingTVShows') }}
        </li>
      </ul>
      <div id="ech-switcher" class="uk-switcher">
        <div class="uk-active">
          <ech-movies-card
            :movies="trendingMovies._results"
            class="ech-scroll-spy-effect"
            @outbound-open-video-modal="playVideoURL"
          ></ech-movies-card>
        </div>
        <div>
          <ech-tv-show-card
            :movies="trendingTVShows._results"
            class="ech-scroll-spy-effect"
            @outbound-open-video-modal="playVideoURL"
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
import EchVideoFrameX from '../components/movies/EchVideoFrameX'
import EchHeaderMain from '../layouts/header/EchHeaderMain'
import MediaManager from '../middleware/modules/vue/mixins/MediaManager'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  components: {
    EchHeaderMain,
    EchVideoFrameX,
    EchSliderMain,
    EchTvShowCard,
    EchMoviesCard
  },
  mixins: [MediaManager],
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
      },
      mediaType: 'movies',
      trendingResults: {},
      url:
        'https://www.youtube.com/embed/Yj0l7iGKh8g?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1'
    }
  },
  mounted() {
    const self = this
    self.mediaType = 'tvshows'
    self.trendingResults = self.trendingMovies
    self.$uikit.tab('#ech-tab').show(0)
    self.$uikit.util.on('#ech-switcher', 'show', function() {
      self.mediaType = self.mediaType === 'movies' ? 'tvshows' : 'movies'
      self.trendingResults =
        self.mediaType === 'movies' ? self.trendingMovies : self.trendingTVShows
    })
  },
  created() {},
  methods: {},
  head() {
    return {
      title: this.$i18n.messages[this.$i18n.locale].seo.index,
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/uikit@3.4.6/dist/js/uikit.min.js' }
      ],
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
