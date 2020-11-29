<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-networks-nav-bar></ech-networks-nav-bar>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-movies-card-detail
        :movies="movies"
        @outbound-open-video-modal="playVideo"
      ></ech-movies-card-detail>
    </section>
    <section v-if="inNotEmpty(movies[0])" class="uk-section uk-section-xsmall">
      <ech-slider-people-card-extended
        :movies="movies"
        class="uk-margin-small-top"
      ></ech-slider-people-card-extended>
    </section>
    <section
      v-if="false && inNotEmpty(videos)"
      class="uk-section uk-section-xsmall"
    >
      <ech-slider-videos
        :videos="videos"
        :poster-path="movies[0]._poster_path"
        :posters="posters"
        :movie-name="movies[0]._title"
        @outbound-open-video-modal="playVideo"
      ></ech-slider-videos>
    </section>
    <section
      v-if="false && inNotEmpty(posters)"
      class="uk-section uk-section-xsmall"
    >
      <ech-slider-posters
        :posters="posters"
        :movie-name="movies[0]._title"
      ></ech-slider-posters>
    </section>
    <section v-if="inNotEmpty(reviews)" class="uk-section uk-section-xsmall">
      <ech-reviews :reviews="reviews"></ech-reviews>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-disqus class="uk-margin-medium-top"></ech-disqus>
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
import { GetMovieDetailsControllerRequest } from '@/middleware/modules/movies/getDetails/userapplication/controller/GetMovieDetailsController'
import VideoControllerManager from '@/middleware/modules/vue/mixins/VideoControllerManager'
import CreditsManager from '@/middleware/modules/vue/mixins/CreditsManager'
import EchDisqus from '@/components/disqus/EchDisqus'
import EchSliderPosters from '@/components/slider/EchSliderPosters'
import EchSliderVideos from '@/components/slider/EchSliderVideos'
import EchMoviesCardDetail from '@/components/movies/EchMoviesCardDetails'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import DetailsHeaderManager from '@/middleware/modules/vue/mixins/DetailsHeaderManager'
import RequestDetailsHeaderManager from '@/middleware/modules/vue/mixins/RequestDetailsHeaderManager'
import EchNetworksNavBar from '@/layouts/networksbar/EchNetworksNavBar'
import Utils from '@/middleware/modules/vue/mixins/Utils'
import EchReviews from '@/components/movies/EchReviews'
import EchSliderPeopleCardExtended from '@/components/slider/EchSliderPeopleCardExtended'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchMoviesDetails',
  scrollToTop: true,
  components: {
    EchSliderPeopleCardExtended,
    EchReviews,
    EchNetworksNavBar,
    EchMoviesCardDetail,
    EchSliderVideos,
    EchSliderPosters,
    EchDisqus
  },
  mixins: [
    VideoControllerManager,
    CreditsManager,
    DetailsHeaderManager,
    RequestDetailsHeaderManager,
    Utils
  ],
  // eslint-disable-next-line require-await
  async asyncData({ app, route, params, store, context }) {
    const language = app.i18n.locale
    const movie_id = params.index.split('-')[0]
    const getMovieDetailsControllerResponse = await beanContainer.getMovieDetailsController.execute(
      new GetMovieDetailsControllerRequest({ movie_id, language })
    )
    if (getMovieDetailsControllerResponse._error) {
      app.router.push('/') // fallback volver a main page
      return
    }
    const movie = {
      ...getMovieDetailsControllerResponse
    }
    return {
      movies: [movie],
      language
    }
  },
  data() {
    return {
      movies: [],
      movie_title: '',
      movie_id: 0,
      mediaType: MediaTypes.movie,
      language: 'es'
    }
  }
}
</script>
<style></style>
