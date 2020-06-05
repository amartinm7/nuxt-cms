<template>
  <div>
    <li class="uk-active">
      {{ $t('label_sortedBy') }}
      <span
        uk-icon="close"
        class="uk-margin-small-left ech-basic uk-align-right"
        @click="resetFilters()"
      ></span>
    </li>
    <li class="uk-nav-divider"></li>
    <li v-for="(value, propertyName, index) in getSortedByList" :key="index">
      <span
        :class="{
          'uk-label': true,
          'uk-label-success': isFilterIncluded(propertyName),
          'uk-margin-small-left': true,
          'ech-basic': true
        }"
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
      this.$router.push({
        path: `/${language}/${
          self.mediaTypePath
        }/bygenres/${Date.now()}/${sanitizedPathParams}`,
        query: {
          sortedBy: propertyName
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
