<template>
  <div>
    <section v-if="false" class="uk-section uk-section-xsmall">
      <ech-header-main @outbound-open-video-modal="playVideo"></ech-header-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-networks-nav-bar></ech-networks-nav-bar>
      <ech-slider-main :movies="trendingShows._results"> </ech-slider-main>
      <ech-pagination-by-trending
        :action-name-index="actionNameIndex"
        :media-type="mediaType"
        :page="page"
        :total-pages="trendingShows._total_results"
      ></ech-pagination-by-trending>
      <ech-friend-networks-nav-bar></ech-friend-networks-nav-bar>
      <h1
        class="ech-basic uk-text-center uk-text-capitalize uk-heading-large uk-text-bolder uk-text-emphasis uk-hidden@s"
      >
        {{ getSection(mediaType) }}
      </h1>
      <h1 class="ech-basic uk-text-center uk-visible@s">
        {{ getSection(mediaType) }}
      </h1>
    </section>
    <section class="uk-section uk-section-xsmall">
      <div>
        <ech-movies-card
          :movies="trendingShows._results"
          @outbound-open-video-modal="playVideo"
        ></ech-movies-card>
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
import EchMoviesCard from '@/components/movies/EchMoviesCard'
import EchSliderMain from '@/components/slider/EchSliderMain'
import EchHeaderMain from '@/layouts/header/EchHeaderMain'
import VideoControllerManager from '@/middleware/modules/vue/mixins/VideoControllerManager'
import UpcomingManager from '@/middleware/modules/vue/mixins/UpcomingManager'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import DetailsHeaderManager from '@/middleware/modules/vue/mixins/DetailsHeaderManager'
import PaginationForTrendingManager from '@/middleware/modules/vue/mixins/PaginationForTrendingManager'
import EchNetworksNavBar from '@/layouts/networksbar/EchNetworksNavBar'
import RedirectHomeManager from '@/middleware/modules/vue/mixins/RedirectHomeManager'
import EchFriendNetworksNavBar from '@/layouts/friendNetworks/EchFriendNetworksNavBar'
import TrendingManager from '@/middleware/modules/vue/mixins/TrendingManager'
import EchPaginationByTrending from '@/components/movies/EchPaginationByTranding'

export default {
  name: 'EchMoviesUpcoming',
  components: {
    EchPaginationByTrending,
    EchFriendNetworksNavBar,
    EchNetworksNavBar,
    EchHeaderMain,
    EchSliderMain,
    EchMoviesCard
  },
  mixins: [
    VideoControllerManager,
    UpcomingManager,
    DetailsHeaderManager,
    PaginationForTrendingManager(MediaTypes.movie),
    RedirectHomeManager,
    TrendingManager
  ],
  data() {
    return {
      trendingShows: {
        _page: 1,
        _total_pages: 1,
        _total_results: 1,
        _results: []
      },
      actionNameIndex: '',
      mediaType: MediaTypes.movie,
      page: 1
    }
  }
}
</script>
<style></style>
