<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-header-main @outbound-open-video-modal="playVideo"></ech-header-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-slider-main :movies="trendingTVShows._results"> </ech-slider-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <h1 class="uk-text-center">{{ getSection(mediaType) }}</h1>
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
import EchTvShowCard from '../../../components/movies/EchTvShowCard'
import ActionMapper from '../../../middleware/ActionMapper'
import EchSliderMain from '../../../components/slider/EchSliderMain'
import EchHeaderMain from '../../../layouts/header/EchHeaderMain'
import VideoControllerManager from '../../../middleware/modules/vue/mixins/VideoControllerManager'
import UpcomingManager from '../../../middleware/modules/vue/mixins/UpcomingManager'
import MediaTypes from '../../../middleware/modules/domain/MediaTypes'

export default {
  name: 'EchTvshowUpcoming',
  components: { EchHeaderMain, EchSliderMain, EchTvShowCard },
  mixins: [VideoControllerManager, UpcomingManager],
  // eslint-disable-next-line require-await
  async asyncData({ app, params, store, route }) {
    const language = app.i18n.locale
    const mediaType = MediaTypes.tv
    const action = params.upcoming
    // const action =
    //   store.getters['commandActions/commandActionsStore/getActionForTvShows']
    // console.log('action ' + action)
    const trendingTVShows = await ActionMapper.getController({
      mediaType,
      action
    }).execute({ language })
    return { trendingTVShows }
  },
  data() {
    return {
      trendingTVShows: {
        _page: 1,
        _total_pages: 1,
        _total_results: 1,
        _results: []
      },
      mediaType: MediaTypes.tv
    }
  }
}
</script>

<style></style>
