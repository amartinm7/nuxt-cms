<template>
  <div>
    <section v-if="false" class="uk-section uk-section-xsmall">
      <ech-header-main @outbound-open-video-modal="playVideo"></ech-header-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-networks-nav-bar></ech-networks-nav-bar>
      <ech-slider-main :movies="trendingShows._results"> </ech-slider-main>
      <ech-pagination-by-similar
        :movie-id="showId"
        :page="page"
        :media-type="mediaType"
        :total-pages="trendingShows._total_pages"
      ></ech-pagination-by-similar>
      <ech-friend-networks-nav-bar></ech-friend-networks-nav-bar>
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
          :movies="trendingShows._results"
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
import RedirectHomeManager from '@/middleware/modules/vue/mixins/RedirectHomeManager'
import EchFriendNetworksNavBar from '@/layouts/friendNetworks/EchFriendNetworksNavBar'
import EchPaginationBySimilar from "@/components/movies/EchPaginationBySimilar";
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchTvSimilarTvShows',
  components: {
    EchPaginationBySimilar,
    EchFriendNetworksNavBar,
    EchNetworksNavBar,
    EchPagination,
    EchHeaderMain,
    EchSliderMain,
    EchTvShowCard
  },
  mixins: [VideoControllerManager, DetailsHeaderManager, RedirectHomeManager],
  // eslint-disable-next-line require-await
  async asyncData({ app, params, query }) {
    console.log('getSimilarShowsController')
    const language = app.i18n.locale
    const page = isNaN(query.page) ? 1 : Number(query.page)
    const showId = isNaN(params.similarShow)
      ? 76479
      : Number(params.similarShow)
    const trendingShows = await beanContainer.getSimilarShowsController.execute(
      new GetSimilarShowsControllerRequest({
        language,
        page,
        showId
      })
    )
    return { trendingShows, page, showId }
  },
  data() {
    return {
      trendingShows: {
        _page: 1,
        _total_pages: 1,
        _total_results: 1,
        _results: []
      },
      mediaType: MediaTypes.tv,
      page: 1,
      showId: 76479
    }
  }
}
</script>
<style></style>
