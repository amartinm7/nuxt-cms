<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-header-main
        @outbound-open-video-modal="playVideoURL"
      ></ech-header-main>
      <ech-video-frame-x
        :url="url"
        @clear-video-url="clearVideoURL"
      ></ech-video-frame-x>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-slider-main
        :movies="trendingTVShows._results"
        :media-type-path="mediaTypePath"
        class="ech-scroll-spy-effect"
      >
      </ech-slider-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <h1 class="uk-text-center">{{ getSection(mediaType) }}</h1>
    </section>
    <section class="uk-section uk-section-xsmall">
      <div>
        <ech-tv-show-card
          :movies="trendingTVShows._results"
          class="ech-scroll-spy-effect"
          @outbound-open-video-modal="playVideoURL"
        ></ech-tv-show-card>
      </div>
    </section>
  </div>
</template>
<!-- eslint-disable -->
<!-- eslint-enable -->
<script>
/* eslint-disable camelcase, no-console */
import EchTvShowCard from '../../../components/movies/EchTvShowCard'
import { MEDIA_TYPES } from '../../../middleware/modules/trending/getTrending/adomain/TrendingTypes'
import ActionMapper from '../../../middleware/ActionMapper'
import EchSliderMain from '../../../components/slider/EchSliderMain'
import EchVideoFrameX from '../../../components/movies/EchVideoFrameX'
import EchHeaderMain from '../../../layouts/header/EchHeaderMain'
import VideoControllerManager from '../../../middleware/modules/vue/mixins/VideoControllerManager'
import UpcomingManager from '../../../middleware/modules/vue/mixins/UpcomingManager'
import MediaTypes from '../../../middleware/modules/util/MediaTypes'
import MediaTypePaths from '../../../middleware/modules/util/MediaTypePaths'

export default {
  name: 'EchTvshowUpcoming',
  components: { EchHeaderMain, EchVideoFrameX, EchSliderMain, EchTvShowCard },
  mixins: [VideoControllerManager, UpcomingManager],
  // eslint-disable-next-line require-await
  async asyncData({ app, params, store, route }) {
    const language = app.i18n.locale
    const mediaType = MEDIA_TYPES.TV
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
      mediaTypePath: MediaTypePaths.tv,
      mediaType: MediaTypes.tv,
      url:
        'https://www.youtube.com/embed/Yj0l7iGKh8g?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1'
    }
  }
}
</script>

<style></style>
