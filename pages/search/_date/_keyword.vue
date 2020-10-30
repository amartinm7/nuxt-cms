<template>
  <div>
    <section v-if="false" class="uk-section uk-section-xsmall">
      <ech-header-main @outbound-open-video-modal="playVideo"></ech-header-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-networks-nav-bar></ech-networks-nav-bar>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-slider-main :movies="multiSearch._results"> </ech-slider-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <div>
        <ech-tv-show-card
          :movies="multiSearch._results"
          @outbound-open-video-modal="playVideo"
        ></ech-tv-show-card>
        <ech-movies-card
          :movies="multiSearch._results"
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
import { BeanContainerRegistry } from '../../../middleware/BeanContainerRegistry'
import EchHeaderMain from '../../../layouts/header/EchHeaderMain'
import EchSliderMain from '../../../components/slider/EchSliderMain'
import VideoControllerManager from '../../../middleware/modules/vue/mixins/VideoControllerManager'
import DetailsHeaderManager from '../../../middleware/modules/vue/mixins/DetailsHeaderManager'
import EchTvShowCard from '@/components/movies/EchTvShowCard'
import EchMoviesCard from '@/components/movies/EchMoviesCard'
import EchNetworksNavBar from '~/layouts/networksbar/EchNetworksNavBar'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchSearch',
  components: {
    EchNetworksNavBar,
    EchMoviesCard,
    EchTvShowCard,
    EchHeaderMain,
    EchSliderMain
  },
  mixins: [VideoControllerManager, DetailsHeaderManager],
  // eslint-disable-next-line require-await
  async asyncData({ app, params, store, route }) {
    console.log('EchSearch...')
    const language = app.i18n.locale
    const queryString = params.keyword
    const getMultiSearchByTitleControllerResponse = await beanContainer.getMultiSearchByTitleController.execute(
      {
        query: queryString,
        language
      }
    )
    const multiSearch = {
      ...getMultiSearchByTitleControllerResponse
    }
    return { multiSearch }
  },
  data() {
    return {
      multiSearch: {
        _page: 1,
        _total_pages: 1,
        _total_results: 1,
        _results: []
      },
      requestHeader: {}
    }
  }
}
</script>

<style></style>
