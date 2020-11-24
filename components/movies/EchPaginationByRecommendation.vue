<template>
  <div>
    <div class="uk-flex uk-flex-between ech-scrollspy-effect">
      <nuxt-link
        class="uk-margin-small-right uk-icon ech-spin-icon uk-margin-small-top"
        uk-icon="icon: minus;"
        :uk-tooltip="$t('previousResults')"
        :to="
          getRecommendedMoviesURL({
            movie,
            mediaType,
            page: toPrevious,
            language
          })
        "
      ></nuxt-link>
      <span></span>
      <nuxt-link
        class="uk-margin-small-left uk-icon ech-spin-icon uk-margin-small-top"
        uk-icon="icon: plus;"
        :uk-tooltip="$t('nextResults')"
        :to="
          getRecommendedMoviesURL({
            movie,
            mediaType,
            page: toNext,
            language
          })
        "
      ></nuxt-link>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import PaginationManager from '@/middleware/modules/vue/mixins/PaginationManager'
import RecommendedMoviesManager from '@/middleware/modules/vue/mixins/RecommendedMoviesManager'

export default {
  name: 'EchPaginationByRecommended',
  mixins: [RecommendedMoviesManager, PaginationManager],
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
    }
  },
  computed: {
    language() {
      return this.$i18n.locale
    }
  }
}
</script>
