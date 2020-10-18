<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-header-main @outbound-open-video-modal="playVideo"></ech-header-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-slider-main :movies="trendingTVShows._results"> </ech-slider-main>
      <ech-pagination
        @outbound-to-previous-page="toPrevious"
        @outbound-to-next-page="toNext"
      ></ech-pagination>
    </section>
    <section class="uk-section uk-section-xsmall">
      <h1 class="uk-text-center">{{ $t('pages.tv.byGenres') }}</h1>
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
import { BeanContainerRegistry } from '../../../../middleware/BeanContainerRegistry'
import EchHeaderMain from '../../../../layouts/header/EchHeaderMain'
import EchSliderMain from '../../../../components/slider/EchSliderMain'
import EchTvShowCard from '../../../../components/movies/EchTvShowCard'
import VideoControllerManager from '../../../../middleware/modules/vue/mixins/VideoControllerManager'
import { FindTvShowsByControllerRequest } from '../../../../middleware/modules/tvShows/findBy/userapplication/controller/FindTvShowsByController'
import MediaTypes from '../../../../middleware/modules/domain/MediaTypes'
import DetailsHeaderManager from '../../../../middleware/modules/vue/mixins/DetailsHeaderManager'
import EchPagination from '@/layouts/pagination/EchPagination'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchTvShowsByGenres',
  components: { EchPagination, EchHeaderMain, EchSliderMain, EchTvShowCard },
  mixins: [VideoControllerManager, DetailsHeaderManager],
  // eslint-disable-next-line require-await
  async asyncData({ app, params, query }) {
    const language = app.i18n.locale
    const currentPage = isNaN(query.page) ? 1 : Number(query.page)
    const pathParams = params.genre ?? ''
    const queryParamsSortedBy = query.sortedBy ?? ''
    const networksIds = query.networksIds
    const genres_ids = pathParams
      .split('_')
      .map((name) => app.$genreActionHandler(language).getGenreIdForTvBy(name))
      .filter((it) => it !== undefined)
    console.log('pathParams..' + pathParams)
    console.log('genres_ids..' + genres_ids)
    const trendingTVShows = await beanContainer.findTvShowsByController.execute(
      new FindTvShowsByControllerRequest({
        genres_ids,
        language,
        sortedBy: queryParamsSortedBy,
        page: currentPage,
        networksIds
      })
    )
    return { trendingTVShows, page: currentPage, networksIds }
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
      pathParams: '',
      queryParamsSortedBy: '',
      genres_ids: [],
      page: 1,
      networksIds: ''
    }
  },
  methods: {
    async toPrevious() {
      const previousPage = this.page > 1 ? this.page - 1 : 1
      this.trendingTVShows = await beanContainer.findTvShowsByController.execute(
        new FindTvShowsByControllerRequest({
          genres_ids: this.genres_ids,
          language: this.$i18n.locale,
          sortedBy: this.queryParamsSortedBy,
          page: previousPage,
          networksIds: this.networksIds
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
          genres_ids: this.genres_ids,
          language: this.$i18n.locale,
          sortedBy: this.queryParamsSortedBy,
          page: nextPage,
          networksIds: this.networksIds
        })
      )
      this.page = nextPage
    }
  }
}
</script>
<style></style>
