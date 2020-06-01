<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-header-main @outbound-open-video-modal="playVideo"></ech-header-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-slider-main
        :movies="trendingMovies._results"
        :media-type-path="mediaTypePath"
        class="ech-scroll-spy-effect"
      >
      </ech-slider-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <h1 class="uk-text-center">{{ getSection(mediaType) }}</h1>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-filters
        :media-type-path="mediaTypePath"
        class="ech-scroll-spy-effect"
      ></ech-filters>
    </section>
    <section class="uk-section uk-section-xsmall">
      <div>
        <ech-movies-card
          :movies="trendingMovies._results"
          class="ech-scroll-spy-effect"
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
import { MEDIA_TYPES } from '../../../middleware/modules/trending/getTrending/adomain/TrendingTypes'
import ActionMapper from '../../../middleware/ActionMapper'
import EchMoviesCard from '../../../components/movies/EchMoviesCard'
import EchSliderMain from '../../../components/slider/EchSliderMain'
import EchHeaderMain from '../../../layouts/header/EchHeaderMain'
import VideoControllerManager from '../../../middleware/modules/vue/mixins/VideoControllerManager'
import UpcomingManager from '../../../middleware/modules/vue/mixins/UpcomingManager'
import MediaTypes from '../../../middleware/modules/util/MediaTypes'
import MediaTypePaths from '../../../middleware/modules/util/MediaTypePaths'
import EchFilters from '../../../components/filter/EchFilters'

export default {
  name: 'EchMoviesUpcoming',
  components: { EchHeaderMain, EchSliderMain, EchMoviesCard, EchFilters },
  mixins: [VideoControllerManager, UpcomingManager],
  // eslint-disable-next-line require-await
  async asyncData({ app, params, store, route }) {
    const language = app.i18n.locale
    const mediaType = MEDIA_TYPES.MOVIE
    const action = params.upcoming
    // const action =
    //   store.getters['commandActions/commandActionsStore/getActionForMovies']
    // console.log('action ' + action)
    const trendingMovies = await ActionMapper.getController({
      mediaType,
      action
    }).execute({ language })
    return { trendingMovies }
  },
  data() {
    return {
      trendingMovies: {
        _page: 1,
        _total_pages: 1,
        _total_results: 1,
        _results: []
      },
      mediaTypePath: MediaTypePaths.movies,
      mediaType: MediaTypes.movies
    }
  }
}
</script>
<style></style>
