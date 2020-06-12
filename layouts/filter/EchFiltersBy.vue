<template>
  <div>
    <li class="uk-active">
      <span
        class="uk-margin-small-right uk-icon ech-spin-icon"
        uk-icon="icon: tag; "
      ></span>
      {{ $t('label_genreBy') }}
      <span
        uk-icon="icon: close; ratio: 0.60;"
        class="uk-margin-small-left ech-basic uk-align-right"
        @click="resetFilters()"
      ></span>
    </li>
    <li class="uk-nav-divider@s"></li>
    <li v-for="filter in getGenresList" :key="filter.id">
      <span
        v-if="isFilterIncluded(filter)"
        class="uk-label uk-label-success uk-margin-small-left ech-basic"
        uk-icon="icon: close; ratio: 0.60;"
        @click="findBy(filter)"
      >
        {{ filter.name }}
      </span>
      <span
        v-if="!isFilterIncluded(filter)"
        class="uk-margin-small-left ech-basic"
        @click="findBy(filter)"
      >
        {{ filter.name }}
      </span>
    </li>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import * as ServiceLocator from '../../middleware/framework/modules/ServiceLocator'
const _isEmpty = require('lodash.isempty')

export default {
  name: 'EchFiltersBy',
  props: {
    mediaType: {
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
    getGenresList() {
      return this.$i18n.messages[this.$i18n.locale].genres[this.mediaType]
    }
  },
  methods: {
    findBy(filter) {
      const self = this
      const language = this.$i18n.locale
      const filterNameEN = this.$genreActionHandler().getGenreNameFor(
        this.mediaType,
        filter.id
      )
      const pathParams = this.$route.params.genre ?? ''
      const sanitizedPathParams = this.$route.path.includes(this.mediaType)
        ? pathParams
        : ''
      const queryParamsSortedBy = this.$route.query.sortedBy ?? ''
      const sanitizedqueryParamsSortedBy = this.$route.path.includes(
        this.mediaType
      )
        ? queryParamsSortedBy
        : ''
      const slugger = ServiceLocator.Slugger.sluggify([filterNameEN])
      // use case pathParams are empty, add the filterName
      if (_isEmpty(sanitizedPathParams)) {
        const slugger = ServiceLocator.Slugger.sluggify([filterNameEN])
        this.$router.push({
          path: `/${language}/${
            self.mediaType
          }/bygenres/${Date.now()}/${slugger}`,
          query: {
            sortedBy: sanitizedqueryParamsSortedBy
          }
        })
        return
      }
      // use case pathParams with values and remove a filterName
      if (sanitizedPathParams.includes(slugger)) {
        const finalPath = sanitizedPathParams
          .split('_')
          .filter((it) => it !== slugger)
          .join('_')
        this.$router.push({
          path: `/${language}/${
            self.mediaType
          }/bygenres/${Date.now()}/${finalPath}`,
          query: {
            sortedBy: sanitizedqueryParamsSortedBy
          }
        })
        return
      }
      // use case pathParams with values and add a filterName
      if (!sanitizedPathParams.includes(slugger)) {
        const slugger = ServiceLocator.Slugger.sluggify([filterNameEN])
        const finalPath = `${sanitizedPathParams}_${slugger}`
        this.$router.push({
          path: `/${language}/${
            self.mediaType
          }/bygenres/${Date.now()}/${finalPath}`,
          query: {
            sortedBy: sanitizedqueryParamsSortedBy
          }
        })
      }
    },
    isFilterIncluded(filter) {
      const filterNameEN = this.$genreActionHandler().getGenreNameFor(
        this.mediaType,
        filter.id
      )
      const pathParams = this.$route.params.genre ?? ''
      const slugger = ServiceLocator.Slugger.sluggify([filterNameEN])
      return (
        this.$route.path.includes(this.mediaType) &&
        pathParams.includes(slugger)
      )
    },
    resetFilters() {
      const self = this
      const language = this.$i18n.locale
      const queryParamsSortedBy = this.$route.query.sortedBy ?? ''
      this.$router.push({
        path: `/${language}/${self.mediaType}/bygenres/${Date.now()}/`,
        query: {
          sortedBy: queryParamsSortedBy
        }
      })
    }
  }
}
</script>
