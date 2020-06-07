<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-header-main @outbound-open-video-modal="playVideo"></ech-header-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-slider-main
        :movies="trendingTVShows._results"
        :media-type-path="mediaTypePath"
      >
      </ech-slider-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <h1 class="uk-text-center">{{ $t('pages.tv.byGenres') }}</h1>
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
// const _isEmpty = require('lodash.isempty')
import { BeanContainerRegistry } from '../../../../middleware/BeanContainerRegistry'
import EchHeaderMain from '../../../../layouts/header/EchHeaderMain'
import EchSliderMain from '../../../../components/slider/EchSliderMain'
import EchTvShowCard from '../../../../components/movies/EchTvShowCard'
import VideoControllerManager from '../../../../middleware/modules/vue/mixins/VideoControllerManager'
import GenresHeaderManager from '../../../../middleware/modules/vue/mixins/GenresHeaderManager'
import { FindTvShowsByControllerRequest } from '../../../../middleware/modules/tvShows/findBy/userapplication/controller/FindTvShowsByController'
import MediaTypePaths from '../../../../middleware/modules/domain/MediaTypePaths'
import MediaTypes from '../../../../middleware/modules/domain/MediaTypes'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchTvShowsByGenres',
  components: { EchHeaderMain, EchSliderMain, EchTvShowCard },
  mixins: [VideoControllerManager, GenresHeaderManager],
  // eslint-disable-next-line require-await
  async asyncData({ app, params, query }) {
    const language = app.i18n.locale
    const pathParams = params.genre ?? ''
    const queryParamsSortedBy = query.sortedBy ?? ''
    const genres_ids = pathParams
      .split('_')
      .map((name) => app.$genreActionHandler(language).getGenreIdForTvBy(name))
      .filter((it) => it !== undefined)
    const trendingTVShows = await beanContainer.findTvShowsByController.execute(
      new FindTvShowsByControllerRequest({
        genres_ids,
        language,
        sortedBy: queryParamsSortedBy
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
  },
  computed: {
    mediaTypePaths() {
      return MediaTypePaths
    }
  }
}
</script>
<style></style>
