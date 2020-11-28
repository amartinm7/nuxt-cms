<template>
  <div>
    <a class="uk-link-reset" @click="initVideoURL(movie, index)">
      <span
        class="uk-icon uk-label uk-label-warning ech-basic uk-margin-small-right uk-margin-small-bottom"
        uk-icon="icon: play-circle; ratio: 1"
        :uk-tooltip="`play video ${getVideoName(movie, index)}`"
        >video {{ index + 1 }}
      </span>
    </a>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import LocateManager from '@/middleware/modules/vue/mixins/LocaleManager'
import MediaManager from '@/middleware/modules/vue/mixins/MediaManager'

export default {
  name: 'EchMediaCardPictureNew',
  mixins: [MediaManager, LocateManager],
  props: {
    movie: {
      type: Object,
      default() {
        return {}
      }
    },
    index: {
      type: Number,
      default() {
        return 0
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
