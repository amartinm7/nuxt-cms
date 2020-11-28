<template>
  <div>
    <div
      class="uk-position-relative uk-visible-toggle uk-light uk-flex uk-flex-wrap"
    >
      <div class="uk-width-expand">
        {{ index }}
        <a
          class="uk-button uk-button-default uk-align-center"
          @click="initVideoURL(movie, index)"
          ><div class="uk-inline">
            <img
              :src="imageUrl"
              loading="lazy"
              :uk-tooltip="getTitle(movie)"
              :alt="getTitle(movie)"
              :title="getTitle(movie)"
            />
            <div class="uk-position-center ech-basic" uk-tooltip="play video">
              <span
                class="uk-icon ech-spin-icon"
                uk-icon="icon: play-circle; ratio: 3"
              ></span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import LocateManager from '@/middleware/modules/vue/mixins/LocaleManager'
import MediaManager from '@/middleware/modules/vue/mixins/MediaManager'
import ValuesByDefault from '@/middleware/modules/domain/ValuesByDefault'

export default {
  name: 'EchMediaCardPicture',
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
    imageUrl: {
      type: String,
      default() {
        return ValuesByDefault.logoURLEstrenosCineHoy
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
