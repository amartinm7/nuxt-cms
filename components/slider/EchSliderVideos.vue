<template>
  <article
    v-if="inNotEmpty(videos)"
    class="uk-card uk-card-default uk-card-hover uk-grid-collapse uk-child-width-1-2@s uk-margin ech-scrollspy-effect"
    uk-grid
  >
    <div class="uk-padding-large">
      <h2 class="uk-text-lead uk-text-center ech-basic">
        {{ $t('videosBy', { name: movieName }) }}
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
          <a name="echSliderVideos"></a>
          <li
            v-for="video in videos"
            :key="video._id + Math.random()"
            :todo="video"
          >
            <div class="uk-panel">
              <a @click="initVideoURL(video._id.key)">
                <img
                  :src="getPosterURL(posterPath)"
                  :alt="video._id.id"
                  :title="video._id.id"
                  :uk-tooltip="video._id.id"
                  loading="lazy"
                />
                <div class="uk-position-center ech-basic" uk-tooltip="play">
                  <span
                    class="uk-icon ech-spin-icon"
                    uk-icon="icon: play-circle; ratio: 2"
                  ></span>
                </div>
                <div
                  class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom"
                >
                  <p class="uk-margin-remove uk-text-small">
                    {{ video._id.name }}
                  </p>
                </div>
              </a>
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
  name: 'EchSliderVideos',
  mixins: [MediaManager, Utils],
  props: {
    videos: {
      type: Array,
      default() {
        return []
      }
    },
    posterPath: {
      type: String,
      default() {
        return ''
      }
    },
    movieName: {
      type: String,
      default() {
        return ''
      }
    }
  },
  methods: {
    initVideoURL(key) {
      console.log('emit...' + key)
      if (!key) return
      this.emitMessagePlayVideo(this.getVideoURLFrom(key))
    }
  }
}
</script>
