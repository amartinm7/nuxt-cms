<template>
  <div>
    <section v-if="false" class="uk-section uk-section-xsmall">
      <ech-header-main @outbound-open-video-modal="playVideo"></ech-header-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-networks-nav-bar></ech-networks-nav-bar>
      <ech-slider-main :movies="trendingShows._results"> </ech-slider-main>
      <ech-pagination-by-network
        :network="network"
        :page="page"
        :total-pages="trendingShows._total_pages"
      ></ech-pagination-by-network>
      <ech-friend-networks-nav-bar></ech-friend-networks-nav-bar>
      <h1
        class="ech-basic uk-text-center uk-heading-small uk-text-bolder uk-text-emphasis uk-hidden@s"
      >
        {{ $t('premiereWithNetwork', { name: network._name }) }}
      </h1>
      <h1 class="ech-basic uk-text-center uk-visible@s">
        {{ $t('premiereWithNetwork', { name: network._name }) }}
      </h1>
      <div class="uk-flex uk-flex-center uk-flex-around">
        <ech-network-logo
          :network="network"
          style="width: 50%"
        ></ech-network-logo>
      </div>
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
import { FindTvShowsByControllerRequest } from '@/middleware/modules/tvShows/findBy/userapplication/controller/FindTvShowsByController'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import DetailsHeaderManager from '@/middleware/modules/vue/mixins/DetailsHeaderManager'
import MediaManager from '@/middleware/modules/vue/mixins/MediaManager'
import EchNetworksNavBar from '@/layouts/networksbar/EchNetworksNavBar'
import Networks from '@/middleware/modules/domain/Networks'
import NetworkManager from '@/middleware/modules/vue/mixins/NetworkManager'
import EchNetworkLogo from '@/components/movies/EchNetworkLogo'
import EchFriendNetworksNavBar from '@/layouts/friendNetworks/EchFriendNetworksNavBar'
import EchPaginationByNetwork from '@/components/movies/EchPaginationByNetwork'
import RequestHeaderManager from '@/middleware/modules/vue/mixins/RequestHeaderManager'

const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchTvShowsByGenres',
  components: {
    EchPaginationByNetwork,
    EchFriendNetworksNavBar,
    EchNetworkLogo,
    EchNetworksNavBar,
    EchHeaderMain,
    EchSliderMain,
    EchTvShowCard
  },
  mixins: [
    VideoControllerManager,
    DetailsHeaderManager,
    MediaManager,
    NetworkManager,
    RequestHeaderManager
  ],
  // eslint-disable-next-line require-await
  async asyncData({ app, params, query, store }) {
    const language = app.i18n.locale
    const page = isNaN(query.page) ? 1 : Number(query.page)
    const networkParam = params.network?.split('-')?.[0] ?? ''
    const networkId = isNaN(networkParam) ? '' : Number(networkParam)
    const sortedBy = query.sortedBy ?? ''
    console.log('FindTvShowsByRepository...' + networkId)
    const trendingShows = await beanContainer.findTvShowsByController.execute(
      new FindTvShowsByControllerRequest({
        language,
        sortedBy,
        page,
        networkId
      })
    )
    const networkStore = store.getters['network/networkStore/getNetwork']
    const networkStatic = Networks.getNetWorkBy(networkId)
    const network = networkStatic?._id ? networkStatic : networkStore
    return { trendingShows, page, networkId, network, language }
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
      pathParams: '',
      sortedBy: 'popularity.desc',
      page: 1,
      networkId: '',
      network: {},
      language: 'es',
      title: 'Series by Network',
      overview: 'Series by Network'
    }
  },
  mounted() {
    this.routeToDefaultNetwork()
  }
}
</script>
<style></style>
