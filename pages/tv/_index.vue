<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-networks-nav-bar></ech-networks-nav-bar>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-tv-show-card-details
        :movies="movies"
        @outbound-open-video-modal="playVideo"
      ></ech-tv-show-card-details>
    </section>
    <section
      v-if="inNotEmpty(movies[0]._credits)"
      class="uk-section uk-section-xsmall"
    >
      <ech-slider-people
        :credits="sanitizedCredits(movies[0]._credits)"
        :type="crewTypes.credits"
        :movie-name="movies[0]._name"
        class="uk-margin-small-top"
      ></ech-slider-people>
    </section>
    <section
      v-if="inNotEmpty(movies[0]._crews)"
      class="uk-section uk-section-xsmall"
    >
      <ech-slider-people
        :credits="sanitizedCrews(movies[0]._crews)"
        :type="crewTypes.crew"
        :movie-name="movies[0]._name"
        class="uk-margin-medium-top"
      ></ech-slider-people>
    </section>
    <section
      v-if="inNotEmpty(movies[0]._seasons)"
      class="uk-section uk-section-xsmall"
    >
      <ech-slider-seasons
        :movie-id="movies[0]._id"
        :seasons="movies[0]._seasons"
        :movie-name="movies[0]._name"
      ></ech-slider-seasons>
    </section>
    <section v-if="inNotEmpty(videos)" class="uk-section uk-section-xsmall">
      <ech-slider-videos
        :videos="videos"
        :poster-path="movies[0]._poster_path"
        :posters="posters"
        :movie-name="movies[0]._name"
        @outbound-open-video-modal="playVideo"
      ></ech-slider-videos>
    </section>
    <section v-if="inNotEmpty(posters)" class="uk-section uk-section-xsmall">
      <ech-slider-posters
        :posters="posters"
        :movie-name="movies[0]._name"
      ></ech-slider-posters>
    </section>
    <section v-if="inNotEmpty(reviews)" class="uk-section uk-section-xsmall">
      <ech-reviews :reviews="reviews"></ech-reviews>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-disqus></ech-disqus>
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
import { GetTvShowDetailsControllerRequest } from '@/middleware/modules/tvShows/getDetails/userapplication/controller/GetTvShowDetailsController'
import VideoControllerManager from '@/middleware/modules/vue/mixins/VideoControllerManager'
import CreditsManager from '@/middleware/modules/vue/mixins/CreditsManager'
import EchSliderPeople from '@/components/slider/EchSliderPeople'
import EchDisqus from '@/components/disqus/EchDisqus'
import EchSliderVideos from '@/components/slider/EchSliderVideos'
import EchSliderPosters from '@/components/slider/EchSliderPosters'
import EchTvShowCardDetails from '@/components/movies/EchTvShowCardDetails'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import DetailsHeaderManager from '@/middleware/modules/vue/mixins/DetailsHeaderManager'
import RequestDetailsHeaderManager from '@/middleware/modules/vue/mixins/RequestDetailsHeaderManager'
import EchNetworksNavBar from '@/layouts/networksbar/EchNetworksNavBar'
import EchSliderSeasons from '@/components/slider/EchSliderSeasons'
import Utils from '@/middleware/modules/vue/mixins/Utils'
import EchReviews from '@/components/movies/EchReviews'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchTvshowDetails',
  scrollToTop: true,
  components: {
    EchReviews,
    EchSliderSeasons,
    EchNetworksNavBar,
    EchTvShowCardDetails,
    EchSliderVideos,
    EchSliderPosters,
    EchDisqus,
    EchSliderPeople
  },
  mixins: [
    VideoControllerManager,
    DetailsHeaderManager,
    RequestDetailsHeaderManager,
    CreditsManager,
    Utils
  ],
  // eslint-disable-next-line require-await
  async asyncData({ app, route, params, store }) {
    const language = app.i18n.locale
    const movie_id = params.index.split('-')[0]
    const getTvShowDetailsControllerResponse = await beanContainer.getTvShowDetailsController.execute(
      new GetTvShowDetailsControllerRequest({ movie_id, language })
    )
    if (getTvShowDetailsControllerResponse._error) {
      app.router.push('/') // fallback volver a main page
      return
    }
    const movie = {
      ...getTvShowDetailsControllerResponse
    }
    return {
      movies: [movie],
      language
    }
  },
  data() {
    return {
      movies: [],
      movie_name: '',
      movie_id: 0,
      mediaType: MediaTypes.tv,
      language: 'es'
    }
  }
}
</script>
<style></style>
