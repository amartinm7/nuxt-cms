<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-video-frame-x
        :url="url"
        @clear-video-url="clearVideoURL"
      ></ech-video-frame-x>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-movies-card
        :movies="movies"
        class="ech-scroll-spy-effect"
        @outbound-open-video-modal="playVideoURL"
      ></ech-movies-card>
    </section>
    <section class="uk-section uk-section-xsmall"></section>
  </div>
</template>
<!-- eslint-disable -->
<!-- eslint-enable -->
<script>
/* eslint-disable camelcase, no-console */
import EchMoviesCard from '../../../components/movies/EchMoviesCard'
import { BeanContainerRegistry } from '../../../middleware/BeanContainerRegistry'
import { GetMovieDetailsControllerRequest } from '../../../middleware/modules/movies/getDetails/userapplication/controller/GetMovieDetailsController'
import EchVideoFrameX from '../../../components/movies/EchVideoFrameX'
import VideoControllerManager from '../../../middleware/modules/vue/mixins/VideoControllerManager'
import DetailsHeaderManager from '../../../middleware/modules/vue/mixins/DetailsHeaderManager'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchMoviesDetails',
  scrollToTop: true,
  components: { EchVideoFrameX, EchMoviesCard },
  mixins: [VideoControllerManager, DetailsHeaderManager],
  // eslint-disable-next-line require-await
  async asyncData({ app, route, params, store }) {
    const language = app.i18n.locale
    const movie_id = params.details.split('-')[0]
    const getMovieDetailsControllerResponse = await beanContainer.getMovieDetailsController.execute(
      new GetMovieDetailsControllerRequest({ movie_id, language })
    )
    const movie = {
      ...getMovieDetailsControllerResponse
    }
    return {
      movies: [movie]
    }
  },
  data() {
    return {
      movies: [],
      movie_title: '',
      movie_id: 0,
      url:
        'https://www.youtube.com/embed/Yj0l7iGKh8g?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1'
    }
  }
}
</script>
<style></style>
