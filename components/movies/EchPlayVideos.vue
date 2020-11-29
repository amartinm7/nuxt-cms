<template>
  <div>
    <div
      class="uk-flex uk-flex-center uk-flex-wrap uk-flex-around uk-padding-small"
    >
      <a
        v-for="(video, index) in movie._videos"
        :key="video._id + Math.random()"
        :todo="video"
        class="uk-link-reset"
        @click="initVideoURL(movie, index)"
      >
        <span
          class="uk-icon uk-label uk-label-warning ech-basic uk-margin-small-right uk-margin-small-bottom"
          uk-icon="icon: play-circle; ratio: 1"
          :uk-tooltip="`play video ${getVideoName(movie, index)}`"
          >video {{ index + 1 }}
        </span>
      </a>
    </div>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import LocateManager from '@/middleware/modules/vue/mixins/LocaleManager'
import MediaManager from '@/middleware/modules/vue/mixins/MediaManager'

export default {
  name: 'EchPlayVideos',
  mixins: [MediaManager, LocateManager],
  props: {
    movie: {
      type: Object,
      default() {
        return {}
      }
    },
    mediaType: {
      type: String,
      default() {
        return MediaTypes.movie
      }
    }
  }
}
</script>
<style></style>
