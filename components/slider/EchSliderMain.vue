<template>
  <div
    uk-slider="autoplay: true; sets: true;"
    class="uk-slider uk-container uk-container-large"
  >
    <div class="uk-position-relative" style="height: 278px;">
      <ul
        class="uk-slider-items"
        style="transform: translate3d(0px, 0px, 0px);"
      >
        <a name="echSlider"></a>
        <li
          v-for="movie in movies"
          :key="Number(movie._id) + Math.random()"
          :todo="movie"
        >
          <nuxt-link
            class="uk-link-reset ech-scrollspy-effect"
            :to="
              getDetailPathURL(
                movie._id,
                movie._title || movie._name,
                movie._media_type
              )
            "
          >
            <img
              :src="getPosterURL(movie._poster_path)"
              :alt="movie._title || movie._name"
              :title="movie._title || movie._name"
              loading="lazy"
            />
            <div class="uk-position-center uk-panel"></div>
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
    mediaType: {
      type: String,
      default() {
        return 'movie'
      }
    }
  },
  data() {
    return {}
  }
}
// TODO http://localhost:3000/en/movies/bygenres/western_science-fiction
// DEFAULT IMAGE
</script>
<style>
img:before {
  content: '';
  display: block;
  background: #dedede;
  top: 0;
  bottom: 0;
  min-height: 278px;
  min-width: 185px;
}
</style>
