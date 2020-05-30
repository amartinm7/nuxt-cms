<template>
  <div>
    <p v-show="showTvGenres">
      <span
        v-for="filter in showActionListForTvShows"
        :key="filter.id"
        :class="{
          'uk-label': true,
          'uk-label-success': isFilterIncludedForTv(filter.id),
          'uk-margin-small-left': true,
          'ech-basic': true
        }"
        @click="setFilterForTV(filter.id)"
      >
        {{ filter.name }}
      </span>
    </p>
    <p v-show="showMoviesGenres">
      <span
        v-for="filter in showActionListForMovies"
        :key="filter.id"
        :class="{
          'uk-label': true,
          'uk-label-success': isFilterIncludedForMovies(filter.id),
          'uk-margin-small-left': true,
          'ech-basic': true
        }"
        @click="setFilterForMovies(filter.id)"
      >
        {{ filter.name }}
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
    showActionListForTvShows() {
      return this.$i18n.messages[this.$i18n.locale].genres.tv
    },
    showActionListForMovies() {
      return this.$i18n.messages[this.$i18n.locale].genres.movies
    }
  },
  methods: {
    setFilterForTV(filterId) {
      this.$store.dispatch(
        'genreFilters/filtersStore/setFilterForTvShows',
        filterId
      )
    },
    isFilterIncludedForTv(filterId) {
      return this.$store.getters[
        'genreFilters/filtersStore/getFiltersForTvShows'
      ].includes(filterId)
    },
    setFilterForMovies(filterId) {
      this.$store.dispatch(
        'genreFilters/filtersStore/setFilterForMovies',
        filterId
      )
    },
    isFilterIncludedForMovies(filterId) {
      return this.$store.getters[
        'genreFilters/filtersStore/getFiltersForMovies'
      ].includes(filterId)
    }
  }
}
</script>
