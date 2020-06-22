<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-header-main @outbound-open-video-modal="playVideo"></ech-header-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-slider-main :movies="multiSearch._results"> </ech-slider-main>
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
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchSearch',
  components: { EchHeaderMain, EchSliderMain },
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
    return { multiSearch, movies: multiSearch._results }
  },
  data() {
    return {
      multiSearch: {
        _page: 1,
        _total_pages: 1,
        _total_results: 1,
        _results: []
      },
      movies: []
    }
  }
}
</script>

<style></style>
