<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-video-frame-x
        :url="url"
        @clear-video-url="clearVideoURL"
      ></ech-video-frame-x>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-slider-main
        :movies="trendingTVShows._results"
        class="ech-scroll-spy-effect"
      >
      </ech-slider-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <h1 class="uk-text-lead uk-text-center">{{ getSection() }}</h1>
    </section>
    <section class="uk-section uk-section-xsmall">
      <div>
        <ech-tv-show-card
          :movies="trendingTVShows._results"
          class="ech-scroll-spy-effect"
          @open-video-modal="playVideoURL"
        ></ech-tv-show-card>
      </div>
    </section>
  </div>
</template>
<!-- eslint-disable -->
<!-- eslint-enable -->
<script>
/* eslint-disable camelcase, no-console */
import EchTvShowCard from '../../../components/movies/EchTvShowCard'
import { MEDIA_TYPES } from '../../../middleware/modules/trending/getTrending/adomain/TrendingTypes'
import ActionMapper from '../../../middleware/ActionMapper'
import EchSliderMain from '../../../components/slider/EchSliderMain'
import EchVideoFrameX from '../../../components/movies/EchVideoFrameX'

export default {
  components: { EchVideoFrameX, EchSliderMain, EchTvShowCard },
  // eslint-disable-next-line require-await
  async asyncData({ app, params, store, route }) {
    const language = app.i18n.locale
    const mediaType = MEDIA_TYPES.TV
    const action = params.upcoming
    // const action =
    //   store.getters['commandActions/commandActionsStore/getActionForTvShows']
    // console.log('action ' + action)
    const trendingTVShows = await ActionMapper.getController({
      mediaType,
      action
    }).execute({ language })
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
      url:
        'https://www.youtube.com/embed/Yj0l7iGKh8g?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1'
    }
  },
  created() {},
  methods: {
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${posterPath}`
    },
    getSection() {
      return this.$i18n.messages[this.$i18n.locale].pages.tv[
        this.$route.params.upcoming
      ]
    },
    playVideoURL(url) {
      console.log('playVideoURL url...' + url)
      this.url = url
      this.$uikit.modal('#modal-center').show()
    },
    clearVideoURL() {
      console.log('reset url...')
      this.url = ''
    }
  },
  head() {
    return {
      title: `Estrenos Cine Hoy: ${this.getSection()}`,
      meta: [
        {
          name: 'keywords',
          content:
            'Estrenos de cine, peliculas tvShows hoy, programacion tvShows, Movies, TV Shows, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast'
        },
        {
          charset: 'utf-8'
        }
      ]
    }
  }
}
</script>

<style></style>
