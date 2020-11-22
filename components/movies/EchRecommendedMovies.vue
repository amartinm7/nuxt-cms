<template>
  <div class="uk-text-meta uk-text-center ech-basic">
    <nuxt-link
      :to="getRecommendedMoviesURL({ id: movieId })"
      class="uk-link-reset"
      :alt="$t('recommendedMovies')"
      :uk-tooltip="$t('recommendedMovies')"
    >
      <span
        class="uk-label uk-label-success ech-basic"
        uk-icon="icon: video-camera; ratio: 0.75;"
        >{{ $t('recommendedMovies') }}
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
    }
  }
}
</script>
<style></style>
