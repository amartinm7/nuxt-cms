<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-header-main @outbound-open-video-modal="playVideo"></ech-header-main>
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
      <ech-filters
        :media-type-path="mediaTypePath"
        class="ech-scroll-spy-effect"
      ></ech-filters>
    </section>
    <section class="uk-section uk-section-xsmall">
      <div>
        <ech-tv-show-card
          :movies="trendingTVShows._results"
          class="ech-scroll-spy-effect"
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
import { BeanContainerRegistry } from '../../../middleware/BeanContainerRegistry'
import EchSliderMain from '../../../components/slider/EchSliderMain'
import EchHeaderMain from '../../../layouts/header/EchHeaderMain'
import VideoControllerManager from '../../../middleware/modules/vue/mixins/VideoControllerManager'
import UpcomingManager from '../../../middleware/modules/vue/mixins/UpcomingManager'
import MediaTypes from '../../../middleware/modules/util/MediaTypes'
import MediaTypePaths from '../../../middleware/modules/util/MediaTypePaths'
import { FindTvShowsByControllerRequest } from '../../../middleware/modules/tvShows/findBy/userapplication/controller/FindTvShowsByController'
import EchTvShowCard from '../../../components/movies/EchTvShowCard'
import EchFilters from '../../../components/filter/EchFilters'
const _isEmpty = require('lodash.isempty')
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchTvShowsByGenres',
  components: { EchHeaderMain, EchSliderMain, EchTvShowCard, EchFilters },
  mixins: [VideoControllerManager, UpcomingManager],
  // eslint-disable-next-line require-await
  async asyncData({ app, params }) {
    const language = app.i18n.locale
    const pathParams = _isEmpty(params.genre) ? '' : params.genre
    const genres_ids = pathParams
      .split('_')
      .map((name) => app.$genreActionHandler(language).getGenreIdForTvBy(name))
      .filter((it) => it !== undefined)
    const trendingTVShows = await beanContainer.findTvShowsByController.execute(
      new FindTvShowsByControllerRequest({
        genres_ids,
        language
      })
    )
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
      mediaType: MediaTypes.tv
    }
  }
}
</script>
<style></style>
