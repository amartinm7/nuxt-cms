<template>
  <div class="uk-text-meta uk-text-center">
    <nuxt-link
      :to="getRelatedShowsURL({ id: movieId, mediaType })"
      class="uk-link-reset"
      :alt="$t('moreRelatedMovies')"
      :uk-tooltip="$t('moreRelatedMovies')"
    >
      <span
        class="uk-label uk-label-success ech-basic"
        uk-icon="icon: video-camera; ratio: 0.75;"
        >{{ $t('moreRelatedMovies') }}
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
        return ''
      }
    },
    mediaType: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>
<style></style>
