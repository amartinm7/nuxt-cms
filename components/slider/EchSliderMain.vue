<template>
  <div uk-slider="autoplay: true; sets: true;" class="uk-slider">
    <div class="uk-position-relative">
      <ul
        class="uk-slider-items"
        style="transform: translate3d(0px, 0px, 0px);"
      >
        <a name="echSlider"></a>
        <li v-for="movie in movies" :key="movie._id" :todo="movie">
          <nuxt-link
            class="uk-link-reset"
            :to="getMovieDetailURL(movie._id, movie._title || movie._name)"
          >
            <img :src="getPosterURL(movie._poster_path)" alt="movie._name" />
            <div class="uk-positio  n-center uk-panel"></div>
          </nuxt-link>
        </li>
      </ul>
      <a
        class="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-previous
        uk-slider-item="previous"
      ></a>
      <a
        class="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-next
        uk-slider-item="next"
      ></a>
    </div>
    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import * as ServiceLocator from '../../middleware/framework/modules/ServiceLocator'

export default {
  name: 'EchSliderMain',
  props: {
    movies: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${posterPath}`
    },
    getMovieDetailURL(movie_id, movie_title) {
      const language = this.$i18n.locale
      const slugger = ServiceLocator.Slugger.sluggify([movie_title])
      return `/${language}/movies/details/${movie_id}-${slugger}`
    }
  }
}
</script>
