<template>
  <div class="uk-text-meta uk-text-center ech-basic">
    <nuxt-link
      :to="getRelatedShowsURL({ movie, mediaType, language, page })"
      class="uk-link-reset"
      :alt="label"
      :uk-tooltip="label"
    >
      <span
        class="uk-label uk-label-success ech-basic"
        uk-icon="icon: search; ratio: 1;"
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
