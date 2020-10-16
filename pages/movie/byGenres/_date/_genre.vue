<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-header-main @outbound-open-video-modal="playVideo"></ech-header-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-slider-main :movies="trendingMovies._results"> </ech-slider-main>
      <ech-pagination
        @outbound-to-previous-page="toPrevious"
        @outbound-to-next-page="toNext"
      ></ech-pagination>
    </section>
    <section class="uk-section uk-section-xsmall">
      <h1 class="uk-text-center">{{ $t('pages.movie.byGenres') }}</h1>
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
import { FindMoviesByControllerRequest } from '../../../../middleware/modules/movies/findBy/userapplication/controller/FindMoviesByController'
import MediaTypes from '../../../../middleware/modules/domain/MediaTypes'
import DetailsHeaderManager from '../../../../middleware/modules/vue/mixins/DetailsHeaderManager'
import EchPagination from '@/layouts/pagination/EchPagination'
// const _isEmpty = require('lodash.isempty')
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchMoviesByGenres',
  components: { EchPagination, EchHeaderMain, EchSliderMain, EchMoviesCard },
  mixins: [VideoControllerManager, DetailsHeaderManager],
  // eslint-disable-next-line require-await
  async asyncData({ app, params, query }) {
    const language = app.i18n.locale
    const currentPage = isNaN(query.page) ? 1 : Number(query.page)
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
        sortedBy: queryParamsSortedBy,
        page: currentPage
      })
    )
    return {
      trendingMovies,
      pathParams,
      queryParamsSortedBy,
      genres_ids,
      page: currentPage
    }
  },
  data() {
    return {
      trendingMovies: {
        _page: 1,
        _total_pages: 1,
        _total_results: 1,
        _results: []
      },
      mediaType: MediaTypes.movie,
      pathParams: '',
      queryParamsSortedBy: '',
      genres_ids: [],
      page: 1
    }
  },
  methods: {
    async toPrevious() {
      const previousPage = this.page > 1 ? this.page - 1 : 1
      this.trendingMovies = await beanContainer.findMoviesByController.execute(
        new FindMoviesByControllerRequest({
          genres_ids: this.genres_ids,
          language: this.$i18n.locale,
          sortedBy: this.queryParamsSortedBy,
          page: previousPage
        })
      )
      this.page = previousPage
    },
    async toNext() {
      const nextPage =
        this.page < this.trendingMovies._total_pages
          ? this.page + 1
          : this.trendingMovies._total_pages
      this.trendingMovies = await beanContainer.findMoviesByController.execute(
        new FindMoviesByControllerRequest({
          genres_ids: this.genres_ids,
          language: this.$i18n.locale,
          sortedBy: this.queryParamsSortedBy,
          page: nextPage
        })
      )
      this.page = nextPage
    }
  }
}
</script>
<style></style>
