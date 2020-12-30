<template>
  <div class="uk-text-meta uk-text-center ech-basic">
    <nuxt-link
      :to="getRecommendedMoviesURL({ movie, mediaType, language, page: 1 })"
      class="uk-link-reset"
      :alt="$t(label)"
      :uk-tooltip="$t(label)"
    >
      <span
        class="uk-label uk-label-success ech-basic"
        uk-icon="icon: search; ratio: 1;"
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
    movie: {
      type: Object,
      default() {
        return {}
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
  },
  computed: {
    language() {
      return this.$i18n.locale
    }
  }
}
</script>
<style></style>
