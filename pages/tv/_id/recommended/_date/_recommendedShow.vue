<template>
  <div>
    <section v-if="false" class="uk-section uk-section-xsmall">
      <ech-header-main @outbound-open-video-modal="playVideo"></ech-header-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-networks-nav-bar></ech-networks-nav-bar>
      <ech-slider-main :movies="trendingShows._results"> </ech-slider-main>
      <ech-pagination-by-recommended
        :movie="movie"
        :page="page"
        :media-type="mediaType"
        :total-pages="trendingShows._total_pages"
      ></ech-pagination-by-recommended>
      <ech-friend-networks-nav-bar></ech-friend-networks-nav-bar>
      <h1
        class="ech-basic uk-text-center uk-heading-small uk-text-bolder uk-text-emphasis uk-hidden@s"
      >
        {{ $t('recommendedTvShows') }}
      </h1>
      <h1 class="ech-basic uk-text-center uk-visible@s">
        {{ $t('recommendedTvShows') }}
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
import VideoControllerManager from '@/middleware/modules/vue/mixins/VideoControllerManager'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import DetailsHeaderManager from '@/middleware/modules/vue/mixins/DetailsHeaderManager'
import EchNetworksNavBar from '@/layouts/networksbar/EchNetworksNavBar'
import RedirectHomeManager from '@/middleware/modules/vue/mixins/RedirectHomeManager'
import EchFriendNetworksNavBar from '@/layouts/friendNetworks/EchFriendNetworksNavBar'
import { GetRecommendedTvShowsControllerRequest } from '@/middleware/modules/tvShows/getRecommendedTvShows/userapplication/controller/GetRecommendedTvShowsController'
import EchTvShowCard from '@/components/movies/EchTvShowCard'
import EchPaginationByRecommended from '@/components/movies/EchPaginationByRecommendation'
import GetIdNameFromPathParam from '@/middleware/framework/modules/requestParams/GetIdNameFromPathParam'
import RequestHeaderManager from '@/middleware/modules/vue/mixins/RequestHeaderManager'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchTvRecommendedShow',
  components: {
    EchPaginationByRecommended,
    EchTvShowCard,
    EchFriendNetworksNavBar,
    EchNetworksNavBar,
    EchHeaderMain,
    EchSliderMain
  },
  mixins: [
    VideoControllerManager,
    DetailsHeaderManager,
    RedirectHomeManager,
    RequestHeaderManager
  ],
  // eslint-disable-next-line require-await
  async asyncData({ app, params, query, route }) {
    const language = app.i18n.locale
    const page = isNaN(query.page) ? 1 : Number(query.page)
    const { _id, _name } = GetIdNameFromPathParam.parse({
      pathParam: params.id,
      defaultParam: 76479
    })
    const movie_name = _name
    const movie_id = _id
    const trendingShows = await beanContainer.getRecommendedTvShowsController.execute(
      new GetRecommendedTvShowsControllerRequest({
        language,
        page,
        movie_id
      })
    )
    return {
      trendingShows,
      page,
      movie: { _id: movie_id, _name: movie_name },
      language
    }
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
      movie: {},
      language: 'es',
      title: 'Recommended Series',
      overview: 'Recommended Series'
    }
  }
}
</script>
<style></style>
