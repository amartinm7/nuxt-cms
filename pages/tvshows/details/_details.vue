<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-video-frame-x
        :url="url"
        @clear-video-url="clearVideoURL"
      ></ech-video-frame-x>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-tv-show-card
        :movies="movies"
        class="ech-scroll-spy-effect"
        @outbound-open-video-modal="playVideoURL"
      ></ech-tv-show-card>
    </section>
    <section class="uk-section uk-section-xsmall"></section>
  </div>
</template>
<!-- eslint-disable -->
<!-- eslint-enable -->
<script>
/* eslint-disable camelcase, no-console */
import { BeanContainerRegistry } from '../../../middleware/BeanContainerRegistry'
import EchTvShowCard from '../../../components/movies/EchTvShowCard'
import { GetTvShowDetailsControllerRequest } from '../../../middleware/modules/tvShows/getDetails/userapplication/controller/GetTvShowDetailsController'
import EchVideoFrameX from '../../../components/movies/EchVideoFrameX'
import VideoControllerManager from '../../../middleware/modules/vue/mixins/VideoControllerManager'
import DetailsHeader from '../../../middleware/modules/vue/mixins/DetailsHeader'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  scrollToTop: true,
  components: { EchVideoFrameX, EchTvShowCard },
  mixins: [VideoControllerManager, DetailsHeader],
  // eslint-disable-next-line require-await
  async asyncData({ app, route, params, store }) {
    const language = app.i18n.locale
    const movie_id = params.details.split('-')[0]
    const getTvShowDetailsControllerResponse = await beanContainer.getTvShowDetailsController.execute(
      new GetTvShowDetailsControllerRequest({ movie_id, language })
    )
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
      url:
        'https://www.youtube.com/embed/Yj0l7iGKh8g?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1'
    }
  },
  mounted() {
    console.log('details...')
  }
}
</script>
<style></style>
