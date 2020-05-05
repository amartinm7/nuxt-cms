<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <div
        class="uk-position-relative uk-visible-toggle uk-light uk-width-auto"
      >
        <a
          class="uk-button uk-button-default uk-align-center"
          href="#modal-center"
          uk-toggle
        >
          <img
            src="https://image.tmdb.org/t/p/w1000_and_h563_face/6ZdQTBy20HzWudZthAV7NkZWfIb.jpg"
            alt="poster-cover"
          />
        </a>
      </div>
      <div id="modal-center" class="uk-flex-top" uk-modal>
        <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <button class="uk-modal-close-default" type="button" uk-close>
            Close
          </button>
          <iframe
            src="https://www.youtube-nocookie.com/embed/Yj0l7iGKh8g?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1"
            width="1920"
            height="1080"
            frameborder="0"
            uk-responsive
            uk-video="automute: false"
            title="main-cover"
          ></iframe>
        </div>
      </div>
    </section>
    <section class="uk-section uk-section-xsmall">
      <div>
        <ech-tv-show-card
          :movies="trendingTVShows._results"
          class="ech-scroll-spy-effect"
        ></ech-tv-show-card>
      </div>
    </section>
  </div>
</template>
<!-- eslint-disable -->
<!-- eslint-enable -->
<script>
/* eslint-disable camelcase, no-console */
import EchTvShowCard from '../../components/movies/EchTvShowCard'
import { MEDIA_TYPES } from '../../middleware/modules/trending/getTrending/adomain/TrendingTypes'
import ActionMapper from '../../middleware/ActionMapper'

export default {
  components: { EchTvShowCard },
  // eslint-disable-next-line require-await
  async asyncData({ app, params, store }) {
    const language = app.i18n.locale
    const mediaTypeTV = MEDIA_TYPES.TV
    const action = store.state.action
    console.log('/pages/tvShows/_topList...' + app.i18n.locale)
    const response = await ActionMapper.getController({
      mediaTypeTV,
      action
    }).execute({ language })
    return response
  },
  data() {
    return {
      trendingMovies: {
        _page: 1,
        _total_pages: 1,
        _total_results: 1,
        _results: []
      },
      trendingTVShows: {
        _page: 1,
        _total_pages: 1,
        _total_results: 1,
        _results: []
      }
    }
  },
  created() {},
  methods: {
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${posterPath}`
    }
  },
  head() {
    return {
      title: 'Estrenos Cine Hoy',
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
