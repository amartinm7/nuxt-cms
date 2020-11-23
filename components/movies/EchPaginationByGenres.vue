<template>
  <div>
    <div class="uk-flex uk-flex-between ech-scrollspy-effect">
      <nuxt-link
        class="uk-margin-small-right uk-icon ech-spin-icon uk-margin-small-top"
        uk-icon="icon: minus;"
        :uk-tooltip="$t('previousResults')"
        :to="
          getByGenreURL({
            genreId,
            genreName,
            mediaType,
            language,
            page: toPrevious
          })
        "
      ></nuxt-link>
      <span></span>
      <nuxt-link
        class="uk-margin-small-left uk-icon ech-spin-icon uk-margin-small-top"
        uk-icon="icon: plus;"
        :uk-tooltip="$t('nextResults')"
        :to="
          getByGenreURL({
            genreId,
            genreName,
            mediaType,
            language,
            page: toNext
          })
        "
      ></nuxt-link>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import PaginationManager from '@/middleware/modules/vue/mixins/PaginationManager'
import LocaleManager from '@/middleware/modules/vue/mixins/LocaleManager'
import GenresManager from '@/middleware/modules/vue/mixins/GenresManager'

export default {
  name: 'EchPaginationByGenres',
  mixins: [GenresManager, PaginationManager, LocaleManager],
  props: {
    genreId: {
      type: Number,
      default() {
        return 0
      }
    },
    genreName: {
      type: String,
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
