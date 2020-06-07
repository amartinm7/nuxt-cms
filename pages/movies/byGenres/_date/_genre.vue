<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-header-main @outbound-open-video-modal="playVideo"></ech-header-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-slider-main
        :movies="trendingMovies._results"
        :media-type-path="mediaTypePath"
      >
      </ech-slider-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <h1 class="uk-text-center">{{ $t('pages.movies.byGenres') }}</h1>
    </section>
    <section class="uk-section uk-section-xsmall">
      <div>
        <ech-movies-card
          :movies="trendingMovies._results"
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
import { BeanContainerRegistry } from '../../../../middleware/BeanContainerRegistry'
import EchMoviesCard from '../../../../components/movies/EchMoviesCard'
import EchSliderMain from '../../../../components/slider/EchSliderMain'
import EchHeaderMain from '../../../../layouts/header/EchHeaderMain'
import VideoControllerManager from '../../../../middleware/modules/vue/mixins/VideoControllerManager'
import MediaTypes from '../../../../middleware/modules/domain/MediaTypes'
import MediaTypePaths from '../../../../middleware/modules/domain/MediaTypePaths'
import { FindMoviesByControllerRequest } from '../../../../middleware/modules/movies/findBy/userapplication/controller/FindMoviesByController'
import GenresHeaderManager from '../../../../middleware/modules/vue/mixins/GenresHeaderManager'
// const _isEmpty = require('lodash.isempty')
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchMoviesByGenres',
  components: { EchHeaderMain, EchSliderMain, EchMoviesCard },
  mixins: [VideoControllerManager, GenresHeaderManager],
  // eslint-disable-next-line require-await
  async asyncData({ app, params, query }) {
    const language = app.i18n.locale
    // const pathParams = _isEmpty(params.genre) ? '' : params.genre
    const pathParams = params.genre ?? ''
    const queryParamsSortedBy = query.sortedBy ?? ''
    const genres_ids = pathParams
      .split('_')
      .map((name) =>
        app.$genreActionHandler(language).getGenreIdForMoviesBy(name)
      )
      .filter((it) => it !== undefined)
    const trendingMovies = await beanContainer.findMoviesByController.execute(
      new FindMoviesByControllerRequest({
        genres_ids,
        language,
        sortedBy: queryParamsSortedBy
      })
    )
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
  },
  computed: {
    mediaTypePaths() {
      return MediaTypePaths
    }
  }
}
</script>
<style></style>
