<template>
  <div>
    <li class="uk-active">
      {{ $t('label_genreBy') }}
      <span
        uk-icon="close"
        class="uk-margin-small-left ech-basic uk-align-right"
        @click="resetFilters()"
      ></span>
    </li>
    <li class="uk-nav-divider"></li>
    <li v-for="filter in getGenresList" :key="filter.id">
      <span
        :class="{
          'uk-label': true,
          'uk-label-success': isFilterIncluded(filter),
          'uk-margin-small-left': true,
          'ech-basic': true
        }"
        @click="findBy(filter)"
      >
        {{ filter.name }}
      </span>
    </li>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import MediaTypePaths from '../../middleware/modules/util/MediaTypePaths'
import MediaTypes from '../../middleware/modules/util/MediaTypes'
import * as ServiceLocator from '../../middleware/framework/modules/ServiceLocator'
const _isEmpty = require('lodash.isempty')

export default {
  name: 'EchFiltersBy',
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
    currentMediaType() {
      return this.mediaTypePath === MediaTypePaths.tv
        ? MediaTypes.tv
        : MediaTypes.movies
    },
    getGenresList() {
      const mediaType =
        this.mediaTypePath === MediaTypePaths.tv
          ? MediaTypes.tv
          : MediaTypes.movies
      return this.$i18n.messages[this.$i18n.locale].genres[mediaType]
    }
  },
  methods: {
    findBy(filter) {
      const self = this
      const language = this.$i18n.locale
      const filterNameEN = this.$genreActionHandler().getGenreNameFor(
        this.currentMediaType,
        filter.id
      )
      const pathParams = this.$route.params.genre
      const queryParamsSortedBy = this.$route.query.sortedBy ?? ''
      const slugger = ServiceLocator.Slugger.sluggify([filterNameEN])
      // use case pathParams are empty, add the filterName
      if (_isEmpty(pathParams)) {
        const slugger = ServiceLocator.Slugger.sluggify([filterNameEN])
        this.$router.push({
          path: `/${language}/${
            self.mediaTypePath
          }/bygenres/${Date.now()}/${slugger}`,
          query: {
            sortedBy: queryParamsSortedBy
          }
        })
        return
      }
      // use case pathParams with values and remove a filterName
      if (pathParams.includes(slugger)) {
        const finalPath = pathParams
          .split('_')
          .filter((it) => it !== slugger)
          .join('_')
        this.$router.push({
          path: `/${language}/${
            self.mediaTypePath
          }/bygenres/${Date.now()}/${finalPath}`,
          query: {
            sortedBy: queryParamsSortedBy
          }
        })
        return
      }
      // use case pathParams with values and add a filterName
      if (!pathParams.includes(slugger)) {
        const slugger = ServiceLocator.Slugger.sluggify([filterNameEN])
        const finalPath = `${pathParams}_${slugger}`
        this.$router.push({
          path: `/${language}/${
            self.mediaTypePath
          }/bygenres/${Date.now()}/${finalPath}`,
          query: {
            sortedBy: queryParamsSortedBy
          }
        })
      }
    },
    isFilterIncluded(filter) {
      const filterNameEN = this.$genreActionHandler().getGenreNameFor(
        this.currentMediaType,
        filter.id
      )
      const pathParams = this.$route.params.genre
      const slugger = ServiceLocator.Slugger.sluggify([filterNameEN])
      return !_isEmpty(pathParams) && pathParams.includes(slugger)
    },
    resetFilters() {
      const self = this
      const language = this.$i18n.locale
      const queryParamsSortedBy = this.$route.query.sortedBy ?? ''
      this.$router.push({
        path: `/${language}/${self.mediaTypePath}/bygenres/${Date.now()}/`,
        query: {
          sortedBy: queryParamsSortedBy
        }
      })
    }
  }
}
</script>
