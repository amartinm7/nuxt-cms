<template>
  <div>
    <section v-if="false" class="uk-section uk-section-xsmall">
      <ech-header-main @outbound-open-video-modal="playVideo"></ech-header-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-networks-nav-bar></ech-networks-nav-bar>
      <ech-slider-main :movies="trendingShows._results"> </ech-slider-main>
      <ech-pagination-by-genres
        :genre-id="genreId"
        :genre-name="genreName"
        :media-type="mediaType"
        :total-pages="trendingShows._total_pages"
      ></ech-pagination-by-genres>
      <ech-friend-networks-nav-bar></ech-friend-networks-nav-bar>
      <h1
        v-if="!genreName"
        class="ech-basic uk-text-center uk-heading-small uk-text-bolder uk-text-emphasis uk-hidden@s"
      >
        {{ $t('similarTvShows') }}
      </h1>
      <h1
        v-if="genreName"
        class="ech-basic uk-text-center uk-heading-small uk-text-bolder uk-text-emphasis uk-hidden@s"
      >
        {{ genreName }}
      </h1>
      <h1 v-if="!genreName" class="ech-basic uk-text-center uk-visible@s">
        {{ $t('similarTvShows') }}
      </h1>
      <h1 v-if="genreName" class="ech-basic uk-text-center uk-visible@s">
        {{ genreName }}
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
import { FindTvShowsByControllerRequest } from '@/middleware/modules/tvShows/findBy/userapplication/controller/FindTvShowsByController'
import DetailsHeaderManager from '@/middleware/modules/vue/mixins/DetailsHeaderManager'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import EchNetworksNavBar from '@/layouts/networksbar/EchNetworksNavBar'
import RedirectHomeManager from '@/middleware/modules/vue/mixins/RedirectHomeManager'
import EchFriendNetworksNavBar from '@/layouts/friendNetworks/EchFriendNetworksNavBar'
import EchPaginationByGenres from '@/components/movies/EchPaginationByGenres'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchTvShowsByGenres',
  components: {
    EchPaginationByGenres,
    EchFriendNetworksNavBar,
    EchNetworksNavBar,
    EchHeaderMain,
    EchSliderMain,
    EchTvShowCard
  },
  mixins: [VideoControllerManager, DetailsHeaderManager, RedirectHomeManager],
  // eslint-disable-next-line require-await
  async asyncData({ app, params, query }) {
    const language = app.i18n.locale
    const page = isNaN(query.page) ? 1 : Number(query.page)
    const genreParam = params.genre?.split('-')?.[0] ?? ''
    const genreId = isNaN(genreParam) ? '' : Number(genreParam)
    const sortedBy = query.sortedBy ?? ''
    // const genres_ids = pathParams
    //   .split('_')
    //   .map((name) => app.$genreActionHandler(language).getGenreIdForTvBy(name))
    //   .filter((it) => it !== undefined)
    const trendingShows = await beanContainer.findTvShowsByController.execute(
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
    return { trendingShows, page, genreId, sortedBy, genreName, language }
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
      sortedBy: 'popularity.desc',
      genreId: 0,
      genreName: '',
      page: 1,
      language: 'es'
    }
  }
}
</script>
<style></style>
