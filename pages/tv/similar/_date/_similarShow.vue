<template>
  <div>
    <section v-if="false" class="uk-section uk-section-xsmall">
      <ech-header-main @outbound-open-video-modal="playVideo"></ech-header-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-networks-nav-bar></ech-networks-nav-bar>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-slider-main :movies="trendingTVShows._results"> </ech-slider-main>
      <ech-pagination
        @outbound-to-previous-page="toPrevious"
        @outbound-to-next-page="toNext"
      ></ech-pagination>
    </section>
    <section class="uk-section uk-section-xsmall">
      <h1
        class="ech-basic uk-text-center uk-text-capitalize uk-heading-large uk-text-bolder uk-text-emphasis uk-hidden@s"
      >
        {{ $t('similarTvShows') }}
      </h1>
      <h1 class="ech-basic uk-text-center uk-visible@s">
        {{ $t('similarTvShows') }}
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
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import DetailsHeaderManager from '@/middleware/modules/vue/mixins/DetailsHeaderManager'
import EchPagination from '@/layouts/pagination/EchPagination'
import { GetSimilarShowsControllerRequest } from '@/middleware/modules/tvShows/getSimilarShows/userapplication/controller/GetSimilarShowsController'
import EchNetworksNavBar from '@/layouts/networksbar/EchNetworksNavBar'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchTvSimilarTvShows',
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
    console.log('getSimilarShowsController')
    const language = app.i18n.locale
    const page = isNaN(query.page) ? 1 : Number(query.page)
    const showId = isNaN(params.similarShow)
      ? 76479
      : Number(params.similarShow)
    const trendingTVShows = await beanContainer.getSimilarShowsController.execute(
      new GetSimilarShowsControllerRequest({
        language,
        page,
        showId
      })
    )
    return { trendingTVShows, page, showId }
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
      page: 1,
      showId: 76479
    }
  },
  mounted() {
    if (this.trendingTVShows._total_results === 0) {
      const language = this.$i18n.locale
      const route = async () => {
        await this.$router.push({
          path: `/${language}`
        })
      }
      route()
    }
  },
  methods: {
    async toPrevious() {
      const previousPage = this.page > 1 ? this.page - 1 : 1
      this.trendingTVShows = await beanContainer.getSimilarShowsController.execute(
        new GetSimilarShowsControllerRequest({
          language: this.$i18n.locale,
          page: previousPage,
          showId: this.showId
        })
      )
      this.page = previousPage
    },
    async toNext() {
      const nextPage =
        this.page < this.trendingTVShows._total_pages
          ? this.page + 1
          : this.trendingTVShows._total_pages
      this.trendingTVShows = await beanContainer.getSimilarShowsController.execute(
        new GetSimilarShowsControllerRequest({
          language: this.$i18n.locale,
          page: nextPage,
          showId: this.showId
        })
      )
      this.page = nextPage
    }
  }
}
</script>
<style></style>
