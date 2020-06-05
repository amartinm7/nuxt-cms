<template>
  <div>
    <li class="uk-active">
      <span
        class="uk-margin-small-right uk-icon ech-spin-icon"
        uk-icon="icon: tag; "
      ></span>
      {{ $t('label_sortedBy') }}
      <span
        uk-icon="icon: close; ratio: 0.60;"
        class="uk-margin-small-left ech-basic uk-align-right"
        @click="resetFilters()"
      ></span>
    </li>
    <li class="uk-nav-divider@s"></li>
    <li v-for="(value, propertyName, index) in getSortedByList" :key="index">
      <span
        v-if="isFilterIncluded(propertyName)"
        class="uk-label uk-label-success uk-margin-small-left ech-basic"
        uk-icon="icon: close; ratio: 0.60;"
        @click="sortedBy(propertyName)"
      >
        {{ value }}
      </span>
      <span
        v-if="!isFilterIncluded(propertyName)"
        class="uk-margin-small-left ech-basic"
        @click="sortedBy(propertyName)"
      >
        {{ value }}
      </span>
    </li>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import MediaTypePaths from '../../middleware/modules/util/MediaTypePaths'
import MediaTypes from '../../middleware/modules/util/MediaTypes'

export default {
  name: 'EchSortedBy',
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
    getSortedByList() {
      const mediaType =
        this.mediaTypePath === MediaTypePaths.tv
          ? MediaTypes.tv
          : MediaTypes.movies
      return this.$i18n.messages[this.$i18n.locale].sortedBy[mediaType]
    }
  },
  methods: {
    sortedBy(propertyName) {
      const self = this
      const language = this.$i18n.locale
      const pathParams = this.$route.params.genre ?? ''
      const sanitizedPathParams = this.$route.path.includes(this.mediaTypePath)
        ? pathParams
        : ''
      console.log(`${propertyName} === ${this.$route.query.sortedBy}`)
      const queryParamsSortedBy =
        this.$route.query.sortedBy === propertyName ? '' : propertyName
      const sanitizedQueryParamsSortedBy = this.$route.path.includes(
        this.mediaTypePath
      )
        ? queryParamsSortedBy
        : propertyName
      this.$router.push({
        path: `/${language}/${
          self.mediaTypePath
        }/bygenres/${Date.now()}/${sanitizedPathParams}`,
        query: {
          sortedBy: sanitizedQueryParamsSortedBy
        }
      })
    },
    isFilterIncluded(propertyName) {
      const sortedByqueryParam = this.$route.query.sortedBy ?? ''
      return (
        this.$route.path.includes(this.mediaTypePath) &&
        sortedByqueryParam === propertyName
      )
    },
    resetFilters() {
      const self = this
      const language = this.$i18n.locale
      const pathParams = this.$route.params.genre ?? ''
      this.$router.push({
        path: `/${language}/${
          self.mediaTypePath
        }/bygenres/${Date.now()}/${pathParams}`
      })
    }
  }
}
</script>
