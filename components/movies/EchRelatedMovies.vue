<template>
  <div class="uk-text-meta uk-text-center ech-basic">
    <nuxt-link
      :to="getRelatedShowsURL({ id: movieId, mediaType, language, page })"
      class="uk-link-reset"
      :alt="label"
      :uk-tooltip="label"
    >
      <span
        class="uk-label uk-label-success ech-basic"
        uk-icon="icon: video-camera; ratio: 0.75;"
        >{{ label }}
      </span>
    </nuxt-link>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import SimilarShowsManager from '@/middleware/modules/vue/mixins/SimilarShowsManager'

export default {
  name: 'EchRelatedMovies',
  mixins: [SimilarShowsManager],
  props: {
    movieId: {
      type: Number,
      default() {
        return 0
      }
    },
    mediaType: {
      type: String,
      default() {
        return ''
      }
    },
    label: {
      type: String,
      default() {
        return 'series'
      }
    },
    page: {
      type: Number,
      default() {
        return 1
      }
    }
  },
  computed: {
    language() {
      return this.$i18n.locale
    }
  }
}
</script>
<style></style>
