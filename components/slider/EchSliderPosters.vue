<template>
  <article
    v-if="inNotEmpty(posters)"
    class="uk-card uk-card-default uk-card-hover uk-grid-collapse uk-child-width-1-2@s uk-margin ech-scrollspy-effect"
    uk-grid
  >
    <div class="uk-padding-large">
      <h2 class="uk-text-lead uk-text-center ech-basic">
        {{ $t('postersBy', { name: movieName }) }}
      </h2>
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
          <li
            v-for="poster in posters"
            :key="poster._file_path + Math.random()"
            :todo="poster"
          >
            <div class="uk-panel">
              <img
                :src="getPosterURL(poster._file_path)"
                :alt="poster._file_path"
                :title="poster._file_path"
                :uk-tooltip="poster._file_path"
                loading="lazy"
              />
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
  </article>
</template>
<script>
/* eslint-disable camelcase, no-console */
import MediaManager from '../../middleware/modules/vue/mixins/MediaManager'
import Utils from '@/middleware/modules/vue/mixins/Utils'

export default {
  name: 'EchSliderPosters',
  mixins: [MediaManager, Utils],
  props: {
    posters: {
      type: Array,
      default() {
        return []
      }
    },
    movieName: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>
