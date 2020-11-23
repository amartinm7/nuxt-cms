<template>
  <div>
    <div class="uk-flex uk-flex-between ech-scrollspy-effect">
      <nuxt-link
        class="uk-margin-small-right uk-icon ech-spin-icon uk-margin-small-top"
        uk-icon="icon: minus;"
        :uk-tooltip="$t('previousResults')"
        :to="
          getRelatedShowsURL({
            id: movieId,
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
          getRelatedShowsURL({
            id: movieId,
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
import SimilarShowsManager from '@/middleware/modules/vue/mixins/SimilarShowsManager'

export default {
  name: 'EchPaginationBySimilar',
  mixins: [SimilarShowsManager, PaginationManager],
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
    }
  },
  computed: {
    language() {
      return this.$i18n.locale
    }
  }
}
</script>
