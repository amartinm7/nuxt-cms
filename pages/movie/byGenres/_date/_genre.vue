<template>
  <div>
    <section v-if="false" class="uk-section uk-section-xsmall">
      <ech-header-main @outbound-open-video-modal="playVideo"></ech-header-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-networks-nav-bar></ech-networks-nav-bar>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-slider-main :movies="trendingShows._results"> </ech-slider-main>
      <ech-pagination
        @outbound-to-previous-page="toPrevious"
        @outbound-to-next-page="toNext"
      ></ech-pagination>
    </section>
    <section class="uk-section uk-section-xsmall">
      <h1
        v-if="!genreName"
        class="ech-basic uk-text-center uk-text-capitalize uk-heading-large uk-text-bolder uk-text-emphasis uk-hidden@s"
      >
        {{ $t('pages.movie.byGenres') }}
      </h1>
      <h1
        v-if="genreName"
        class="ech-basic uk-text-center uk-text-capitalize uk-heading-large uk-text-bolder uk-text-emphasis uk-hidden@s"
      >
        {{ genreName }}
      </h1>
      <h1 v-if="!genreName" class="ech-basic uk-text-center uk-visible@s">
        {{ $t('pages.movie.byGenres') }}
      </h1>
      <h1 v-if="genreName" class="ech-basic uk-text-center uk-visible@s">
        {{ genreName }}
      </h1>
    </section>
    <section class="uk-section uk-section-xsmall">
      <div>
        <ech-movies-card
          :movies="trendingShows._results"
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
import { BeanContainerRegistry } from '@/middleware/BeanContainerRegistry'
import EchMoviesCard from '@/components/movies/EchMoviesCard'
import EchSliderMain from '@/components/slider/EchSliderMain'
import EchHeaderMain from '@/layouts/header/EchHeaderMain'
import VideoControllerManager from '@/middleware/modules/vue/mixins/VideoControllerManager'
import { FindMoviesByControllerRequest } from '@/middleware/modules/movies/findBy/userapplication/controller/FindMoviesByController'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import DetailsHeaderManager from '@/middleware/modules/vue/mixins/DetailsHeaderManager'
import EchPagination from '@/layouts/pagination/EchPagination'
import EchNetworksNavBar from '~/layouts/networksbar/EchNetworksNavBar'
import RedirectHomeManager from '@/middleware/modules/vue/mixins/RedirectHomeManager'
// const _isEmpty = require('lodash.isempty')
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchMoviesByGenres',
  components: {
    EchNetworksNavBar,
    EchPagination,
    EchHeaderMain,
    EchSliderMain,
    EchMoviesCard
  },
  mixins: [VideoControllerManager, DetailsHeaderManager, RedirectHomeManager],
  // eslint-disable-next-line require-await
  async asyncData({ app, params, query }) {
    const language = app.i18n.locale
    const page = isNaN(query.page) ? 1 : Number(query.page)
    const genreId = isNaN(params.genre) ? '' : Number(params.genre)
    const queryParamsSortedBy = query.sortedBy ?? ''
    const trendingShows = await beanContainer.findMoviesByController.execute(
      new FindMoviesByControllerRequest({
        genreId,
        language,
        sortedBy: queryParamsSortedBy,
        page
      })
    )
    const genreName = app.$genreActionHandler(language).getGenreNameBy({
      genreId,
      language,
      mediaType: MediaTypes.movie
    })
    return {
      trendingShows,
      queryParamsSortedBy,
      genreId,
      genreName,
      page
    }
  },
  data() {
    return {
      trendingShows: {
        _page: 1,
        _total_pages: 1,
        _total_results: 1,
        _results: []
      },
      mediaType: MediaTypes.movie,
      pathParams: '',
      queryParamsSortedBy: '',
      genres_ids: [],
      genreName: '',
      page: 1
    }
  },
  methods: {
    async toPrevious() {
      const previousPage = this.page > 1 ? this.page - 1 : 1
      this.trendingShows = await beanContainer.findMoviesByController.execute(
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
        this.page < this.trendingShows._total_pages
          ? this.page + 1
          : this.trendingShows._total_pages
      this.trendingShows = await beanContainer.findMoviesByController.execute(
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
