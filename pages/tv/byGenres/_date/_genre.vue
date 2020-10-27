<template>
  <div>
    <section v-if="false" class="uk-section uk-section-xsmall">
      <ech-header-main @outbound-open-video-modal="playVideo"></ech-header-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-networks-nav-bar></ech-networks-nav-bar>
      <ech-slider-main :movies="trendingTVShows._results"> </ech-slider-main>
      <ech-pagination
        @outbound-to-previous-page="toPrevious"
        @outbound-to-next-page="toNext"
      ></ech-pagination>
    </section>
    <section class="uk-section uk-section-xsmall">
      <h1 v-if="!genreName" class="uk-text-center">
        {{ $t('similarTvShows') }}
      </h1>
      <h1 v-if="genreName" class="uk-text-center">
        {{ genreName }}
      </h1>
    </section>
    <section class="uk-section uk-section-xsmall">
      <div>
        <ech-tv-show-card
          :movies="trendingTVShows._results"
          @outbound-open-video-modal="playVideo"
        ></ech-tv-show-card>
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
// const _isEmpty = require('lodash.isempty')
import { BeanContainerRegistry } from '@/middleware/BeanContainerRegistry'
import EchHeaderMain from '@/layouts/header/EchHeaderMain'
import EchSliderMain from '@/components/slider/EchSliderMain'
import EchTvShowCard from '@/components/movies/EchTvShowCard'
import VideoControllerManager from '@/middleware/modules/vue/mixins/VideoControllerManager'
import { FindTvShowsByControllerRequest } from '@/middleware/modules/tvShows/findBy/userapplication/controller/FindTvShowsByController'
import DetailsHeaderManager from '@/middleware/modules/vue/mixins/DetailsHeaderManager'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import EchPagination from '@/layouts/pagination/EchPagination'
import EchNetworksNavBar from '@/layouts/networksbar/EchNetworksNavBar'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchTvShowsByGenres',
  components: {
    EchNetworksNavBar,
    EchPagination,
    EchHeaderMain,
    EchSliderMain,
    EchTvShowCard
  },
  mixins: [VideoControllerManager, DetailsHeaderManager],
  // eslint-disable-next-line require-await
  async asyncData({ app, params, query }) {
    const language = app.i18n.locale
    const page = isNaN(query.page) ? 1 : Number(query.page)
    const genreId = isNaN(params.genre) ? '' : Number(params.genre)
    const sortedBy = query.sortedBy ?? ''
    // const genres_ids = pathParams
    //   .split('_')
    //   .map((name) => app.$genreActionHandler(language).getGenreIdForTvBy(name))
    //   .filter((it) => it !== undefined)
    const trendingTVShows = await beanContainer.findTvShowsByController.execute(
      new FindTvShowsByControllerRequest({
        genreId,
        language,
        sortedBy,
        page
      })
    )
    const genreName = app.$genreActionHandler(language).getGenreNameBy({
      genreId,
      language,
      mediaType: MediaTypes.tv
    })
    return { trendingTVShows, page, genreId, sortedBy, genreName }
  },
  data() {
    return {
      trendingTVShows: {
        _page: 1,
        _total_pages: 1,
        _total_results: 1,
        _results: []
      },
      mediaType: MediaTypes.tv,
      sortedBy: 'popularity.desc',
      genreId: '',
      genreName: '',
      page: 1
    }
  },
  methods: {
    async toPrevious() {
      const previousPage = this.page > 1 ? this.page - 1 : 1
      this.trendingTVShows = await beanContainer.findTvShowsByController.execute(
        new FindTvShowsByControllerRequest({
          genreId: this.genreId,
          language: this.$i18n.locale,
          sortedBy: this.sortedBy,
          page: previousPage
        })
      )
      this.page = previousPage
    },
    async toNext() {
      const nextPage =
        this.page < this.trendingTVShows._total_pages
          ? this.page + 1
          : this.trendingTVShows._total_pages
      this.trendingTVShows = await beanContainer.findTvShowsByController.execute(
        new FindTvShowsByControllerRequest({
          genreId: this.genreId,
          language: this.$i18n.locale,
          sortedBy: this.sortedBy,
          page: nextPage
        })
      )
      this.page = nextPage
    }
  }
}
</script>
<style></style>
