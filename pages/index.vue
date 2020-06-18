<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-header-main @outbound-open-video-modal="playVideo"></ech-header-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <div class="uk-active">
        <ech-slider-main :movies="trendingResults._results"></ech-slider-main>
      </div>
    </section>
    <section class="uk-section uk-section-xsmall">
      <h1 class="uk-text-center">{{ $t('pages.trending') }}</h1>
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
import StringHandler from '../middleware/framework/modules/string/StringHandler'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchMainIndex',
  components: {
    EchHeaderMain,
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
      mediaType: MediaTypes.movie,
      trendingResults: {}
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
  head() {
    const vm = this
    const title = vm.$i18n.messages[vm.$i18n.locale].seo.index
    const keyword =
      'Estrenos cine hoy, peliculas, series, actores, actrices, TV Shows, movies, actor, actress, movies rating, news, tv networks'
    return {
      title: `${StringHandler.truncate(title, 65)}`,
      meta: [
        {
          charset: 'utf-8'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: keyword
        },
        {
          hid: 'description',
          name: 'description',
          content: `${StringHandler.truncate(keyword, 155)}`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${StringHandler.truncate(title, 35)}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${StringHandler.truncate(keyword, 65)}`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.estrenoscinehoy.com/manifest-icon-192.png'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `www.estrenoscinehoy.com`
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: `estrenoscinehoy.com`
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: `${vm.$i18n.locale}`
        },
        {
          hid: 'og:image:type',
          property: 'og:image:type',
          content: 'image/jpeg'
        }
      ]
    }
  }
}
</script>
<style></style>
