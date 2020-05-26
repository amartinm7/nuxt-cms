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
    <section class="uk-section uk-section-xsmall">
      <ul id="ech-tab" uk-tab class="uk-flex uk-flex-around">
        <li class="uk-active ech-basic">
          <a href="#" uk-icon="icon: users"></a
          >{{ $t('sliderSwitcher.credits') }}
        </li>
        <li class="ech-basic">
          <a href="#" uk-icon="icon: image"></a
          >{{ $t('sliderSwitcher.posters') }}
        </li>
        <li class="ech-basic">
          <a href="#" uk-icon="icon: tv"></a>{{ $t('sliderSwitcher.trailers') }}
        </li>
      </ul>
      <div id="ech-switcher" class="uk-switcher">
        <div class="uk-active">
          <ech-slider-people :credits="credits"></ech-slider-people>
        </div>
        <div>
          <ech-slider-posters :posters="posters"></ech-slider-posters>
        </div>
        <div>
          <ech-slider-videos
            :videos="videos"
            :poster-path="movies[0]._poster_path"
            @outbound-open-video-modal="playVideoURL"
          ></ech-slider-videos>
        </div>
      </div>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-disqus></ech-disqus>
    </section>
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
import DetailsHeaderManager from '../../../middleware/modules/vue/mixins/DetailsHeaderManager'
import CreditsManager from '../../../middleware/modules/vue/mixins/CreditsManager'
import EchSliderPeople from '../../../components/slider/EchSliderPeople'
import EchDisqus from '../../../components/disqus/EchDisqus'
import EchSliderVideos from '../../../components/slider/EchSliderVideos'
import EchSliderPosters from '../../../components/slider/EchSliderPosters'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchTvshowDetails',
  scrollToTop: true,
  components: {
    EchSliderVideos,
    EchSliderPosters,
    EchDisqus,
    EchVideoFrameX,
    EchTvShowCard,
    EchSliderPeople
  },
  mixins: [VideoControllerManager, DetailsHeaderManager, CreditsManager],
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
