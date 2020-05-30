<template>
  <div>
    <p v-show="showTvGenres">
      <span
        v-for="action in showActionListForTvShows"
        :key="action.id"
        class="uk-label uk-margin-small-left ech-basic"
      >
        {{ action.name }}
      </span>
    </p>
    <p v-show="showMoviesGenres">
      <span
        v-for="action in showActionListForMovies"
        :key="action.id"
        class="uk-label uk-margin-small-left ech-basic"
      >
        {{ action.name }}
      </span>
    </p>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import MediaManager from '../../middleware/modules/vue/mixins/MediaManager'
import MediaTypePath from '../../middleware/modules/util/MediaTypePaths'

export default {
  name: 'EchFilters',
  mixins: [MediaManager],
  props: {
    mediaTypePath: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    showTvGenres() {
      return this.mediaTypePath === MediaTypePath.tv
    },
    showMoviesGenres() {
      return this.mediaTypePath === MediaTypePath.movies
    },
    showLocales() {
      // eslint-disable-next-line no-console
      console.log('showLocales... ' + this.$i18n.locale)
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      )
    },
    showActionListForTvShows() {
      return this.$i18n.messages[this.$i18n.locale].genres.tv
    },
    showActionListForMovies() {
      return this.$i18n.messages[this.$i18n.locale].genres.movies
    }
  }
}
</script>
