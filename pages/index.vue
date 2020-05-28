<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-header-main @outbound-open-video-modal="playVideo"></ech-header-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <div class="uk-active">
        <ech-slider-main
          :movies="trendingResults._results"
          :media-type-path="mediaTypePath"
          class="ech-scroll-spy-effect"
        ></ech-slider-main>
      </div>
    </section>
    <section class="uk-section uk-section-xsmall">
      <h1 class="uk-text-center">{{ $t('pages.trending') }}</h1>
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
            @outbound-open-video-modal="playVideo"
          ></ech-movies-card>
        </div>
        <div>
          <ech-tv-show-card
            :movies="trendingTVShows._results"
            class="ech-scroll-spy-effect"
            @outbound-open-video-modal="playVideo"
          ></ech-tv-show-card>
        </div>
      </div>
    </section>
    <!--    <section class="uk-section uk-section-xsmall">-->
    <!--      <ech-video-frame-x-->
    <!--        :url="url"-->
    <!--        @clear-video-url="clearVideoURL"-->
    <!--      ></ech-video-frame-x>-->
    <!--    </section>-->
    <section class="uk-section uk-section-xsmall">
      <ech-video-frame-y
        :url="url"
        :show="showVideo"
        @close-video-url="closeVideo"
      ></ech-video-frame-y>
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
// import EchVideoFrameX from '../components/movies/EchVideoFrameX'
import EchVideoFrameY from '../components/movies/EchVideoFrameY'
import EchHeaderMain from '../layouts/header/EchHeaderMain'
import VideoControllerManager from '../middleware/modules/vue/mixins/VideoControllerManager'
import MediaTypePaths from '../middleware/modules/util/MediaTypePaths'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchMainIndex',
  components: {
    EchHeaderMain,
    // EchVideoFrameX,
    EchVideoFrameY,
    EchSliderMain,
    EchTvShowCard,
    EchMoviesCard
  },
  mixins: [VideoControllerManager],
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
      mediaTypePath: MediaTypePaths.movies,
      trendingResults: {},
      url:
        'https://www.youtube.com/embed/Yj0l7iGKh8g?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1',
      showVideo: false
    }
  },
  mounted() {
    const self = this
    self.mediaTypePath = MediaTypePaths.tvShows
    self.trendingResults = self.trendingMovies
    self.$uikit.tab('#ech-tab').show(0)
    self.$uikit.util.on('#ech-switcher', 'show', function() {
      self.mediaTypePath =
        self.mediaTypePath === 'movies' ? 'tvshows' : 'movies'
      self.trendingResults =
        self.mediaTypePath === 'movies'
          ? self.trendingMovies
          : self.trendingTVShows
    })
  },
  created() {},
  methods: {
    playVideo(url) {
      this.url = url
      this.showVideo = true
    },
    closeVideo() {
      this.showVideo = false
    }
  },
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
            'Estrenos de cine, peliculas tvShows hoy, programacion tvShows, Movies, TV Shows, Reviews, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast'
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
