<template>
  <div class="uk-text-meta uk-text-center ech-basic">
    <nuxt-link
      :to="getRecommendedMoviesURL({ id: movieId, mediaType })"
      class="uk-link-reset"
      :alt="$t(label)"
      :uk-tooltip="$t(label)"
    >
      <span
        class="uk-label uk-label-success ech-basic"
        uk-icon="icon: video-camera; ratio: 0.75;"
        >{{ $t(label) }}
      </span>
    </nuxt-link>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import RecommendedMoviesManager from '@/middleware/modules/vue/mixins/RecommendedMoviesManager'

export default {
  name: 'EchRecommendedMovies',
  mixins: [RecommendedMoviesManager],
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
        return ''
      }
    }
  }
}
</script>
<style></style>
