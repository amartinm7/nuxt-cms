<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ul class="uk-breadcrumb">
        <li><a href="#">Item</a></li>
        <li><a href="#">Item</a></li>
        <li class="uk-disabled"><a>Disabled</a></li>
        <li><span>Active</span></li>
      </ul>
      <ech-tv-show-card-details
        :movies="movies"
        @outbound-open-video-modal="playVideo"
      ></ech-tv-show-card-details>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-slider-people :credits="credits"></ech-slider-people>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-slider-videos
        :videos="videos"
        :poster-path="movies[0]._poster_path"
        :posters="posters"
        @outbound-open-video-modal="playVideo"
      ></ech-slider-videos>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-slider-posters :posters="posters"></ech-slider-posters>
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
import { BeanContainerRegistry } from '../../../middleware/BeanContainerRegistry'
import { GetTvShowDetailsControllerRequest } from '../../../middleware/modules/tvShows/getDetails/userapplication/controller/GetTvShowDetailsController'
import VideoControllerManager from '../../../middleware/modules/vue/mixins/VideoControllerManager'
import CreditsManager from '../../../middleware/modules/vue/mixins/CreditsManager'
import EchSliderPeople from '../../../components/slider/EchSliderPeople'
import EchDisqus from '../../../components/disqus/EchDisqus'
import EchSliderVideos from '../../../components/slider/EchSliderVideos'
import EchSliderPosters from '../../../components/slider/EchSliderPosters'
import EchTvShowCardDetails from '../../../components/movies/EchTvShowCardDetails'
import MediaTypes from '../../../middleware/modules/domain/MediaTypes'
import DetailsHeaderManager from '../../../middleware/modules/vue/mixins/DetailsHeaderManager'
import RequestDetailsHeaderManager from '../../../middleware/modules/vue/mixins/RequestDetailsHeaderManager'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchTvshowDetails',
  scrollToTop: true,
  components: {
    EchTvShowCardDetails,
    EchSliderVideos,
    EchSliderPosters,
    EchDisqus,
    EchSliderPeople
  },
  mixins: [
    VideoControllerManager,
    CreditsManager,
    DetailsHeaderManager,
    RequestDetailsHeaderManager
  ],
  // eslint-disable-next-line require-await
  async asyncData({ app, route, params, store }) {
    const language = app.i18n.locale
    const movie_id = params.details.split('-')[0]
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
      movies: [movie]
    }
  },
  data() {
    return {
      movies: [],
      movie_name: '',
      movie_id: 0,
      mediaType: MediaTypes.tv
    }
  }
}
</script>
<style></style>
