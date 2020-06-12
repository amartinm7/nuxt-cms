<template>
  <div>
    <h3
      v-show="existsPosters(posters)"
      class="uk-text-lead uk-text-center ech-basic"
    >
      Posters
    </h3>
    <div
      class="uk-position-relative uk-visible-toggle uk-light"
      tabindex="-1"
      uk-slider="clsActivated: uk-transition-active; center: true;"
    >
      <ul
        class="uk-slider-items"
        style="transform: translate3d(0px, 0px, 0px);"
      >
        <a name="echSliderPosters"></a>
        <li v-for="poster in posters" :key="poster._file_path" :todo="poster">
          <div class="uk-panel">
            <img :src="getPosterURL(poster._file_path)" alt="poster.name" />
          </div>
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
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import MediaManager from '../../middleware/modules/vue/mixins/MediaManager'

export default {
  name: 'EchSliderPosters',
  mixins: [MediaManager],
  props: {
    posters: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
