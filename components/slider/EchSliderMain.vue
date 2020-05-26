<template>
  <div
    uk-slider="autoplay: true; sets: true;"
    class="uk-slider uk-container uk-container-large"
  >
    <div class="uk-position-relative">
      <ul
        class="uk-slider-items"
        style="transform: translate3d(0px, 0px, 0px);"
      >
        <a name="echSlider"></a>
        <li v-for="movie in movies" :key="movie._id" :todo="movie">
          <nuxt-link
            class="uk-link-reset"
            :to="
              getDetailPathURL(
                movie._id,
                movie._title || movie._name,
                mediaTypePath
              )
            "
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
    <ul
      class="uk-slider-nav uk-dotnav uk-flex-center uk-margin uk-visible@s"
    ></ul>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import MediaManager from '../../middleware/modules/vue/mixins/MediaManager'

export default {
  name: 'EchSliderMain',
  mixins: [MediaManager],
  props: {
    movies: {
      type: Array,
      default() {
        return []
      }
    },
    mediaTypePath: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {}
  }
}
</script>
