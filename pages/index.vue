<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-header-main @outbound-open-video-modal="playVideo"></ech-header-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <div class="uk-active">
        <ech-slider-main :movies="trendingResults._results"></ech-slider-main>
        <div class="uk-flex uk-flex-between ech-scrollspy-effect">
          <span
            class="uk-margin-small-right uk-icon ech-spin-icon"
            uk-icon="icon: arrow-left;"
            :uk-tooltip="$t('previousResults')"
            @click="toPrevious()"
          ></span>
          <span></span>
          <span
            class="uk-margin-small-left uk-icon ech-spin-icon"
            uk-icon="icon: arrow-right;"
            :uk-tooltip="$t('nextResults')"
            @click="toNext()"
          ></span>
        </div>
      </div>
    </section>
    <section class="uk-section uk-section-xsmall">
      <h1 class="uk-text-center ech-scrollspy-effect">
        {{ $t('pages.trending') }}
      </h1>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ul id="ech-tab" uk-tab class="uk-flex uk-flex-around">
        <li
          class="uk-active ech-basic"
          :uk-tooltip="$t('switcher.trendingMoviesTip')"
        >
          <a
            href="#"
            uk-icon="icon: video-camera"
            class="uk-margin-small-left uk-margin-small-right ech-spin-icon"
          ></a
          >{{ $t('switcher.trendingMovies') }}
        </li>
        <li class="ech-basic" :uk-tooltip="$t('switcher.trendingTVShowsTip')">
          <a
            href="#"
            uk-icon="icon: tv"
            class="uk-margin-small-left uk-margin-small-right ech-spin-icon"
          ></a
          >{{ $t('switcher.trendingTVShows') }}
        </li>
      </ul>
      <div id="ech-switcher" class="uk-switcher">
        <div class="uk-active">
          <ech-movies-card
            :movies="trendingMovies._results"
            @outbound-open-video-modal="playVideo"
          ></ech-movies-card>
        </div>
        <div>
          <ech-tv-show-card
            :movies="trendingTVShows._results"
            @outbound-open-video-modal="playVideo"
          ></ech-tv-show-card>
        </div>
      </div>
    </section>
    <div>
      <vk-modal center :show.sync="showVideo">
        <vk-modal-close @click="closeVideo"></vk-modal-close>
        <iframe
          :src="url"
          width="1920"
          height="1080"
          frameborder="0"
          uk-responsive
          uk-video="automute: true"
        ></iframe>
      </vk-modal>
    </div>
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
import EchHeaderMain from '../layouts/header/EchHeaderMain'
import VideoControllerManager from '../middleware/modules/vue/mixins/VideoControllerManager'
import MediaTypes from '../middleware/modules/domain/MediaTypes'
import DetailsHeaderManager from '../middleware/modules/vue/mixins/DetailsHeaderManager'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchMainIndex',
  components: {
    EchHeaderMain,
    EchSliderMain,
    EchTvShowCard,
    EchMoviesCard
  },
  mixins: [VideoControllerManager, DetailsHeaderManager],
  // eslint-disable-next-line require-await
  async asyncData({ app, query }) {
    const language = app.i18n.locale
    const currentPage = isNaN(query.page) ? 1 : Number(query.page)
    const getTrendingMoviesResponse = await beanContainer.getTrendingMoviesController.getTrendingMoviesAndTVShows(
      { language, page: Number(currentPage) }
    )
    return { ...getTrendingMoviesResponse, page: currentPage }
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
      mediaType: MediaTypes.movie,
      trendingResults: {},
      requestHeader: {},
      page: 1
    }
  },
  mounted() {
    const self = this
    self.mediaType = MediaTypes.tv
    self.trendingResults = self.trendingMovies
    self.$uikit.tab('#ech-tab').show(0)
    self.$uikit.util.on('#ech-switcher', 'show', function() {
      self.mediaType =
        self.mediaType === MediaTypes.movie ? MediaTypes.tv : MediaTypes.movie
      self.trendingResults =
        self.mediaType === MediaTypes.movie
          ? self.trendingMovies
          : self.trendingTVShows
    })
  },
  methods: {
    async toPrevious() {
      const language = this.$i18n.locale
      const previousPage = this.page > 1 ? this.page - 1 : 1
      const getTrendingMoviesResponse = await beanContainer.getTrendingMoviesController.getTrendingMoviesAndTVShows(
        { language, page: Number(previousPage) }
      )
      this.trendingMovies = getTrendingMoviesResponse.trendingMovies
      this.trendingTVShows = getTrendingMoviesResponse.trendingTVShows
      this.page = previousPage
      this.trendingResults = this.trendingMovies
      // await this.$router.push({ query: { page: previousPage }, path: '/' })
    },
    async toNext() {
      const language = this.$i18n.locale
      const nextPage =
        this.page < this.trendingResults._total_pages
          ? this.page + 1
          : this.trendingResults._total_pages
      const getTrendingMoviesResponse = await beanContainer.getTrendingMoviesController.getTrendingMoviesAndTVShows(
        { language, page: Number(nextPage) }
      )
      this.trendingMovies = getTrendingMoviesResponse.trendingMovies
      this.trendingTVShows = getTrendingMoviesResponse.trendingTVShows
      this.page = nextPage
      this.trendingResults = this.trendingMovies
    }
  }
}
</script>
<style></style>
