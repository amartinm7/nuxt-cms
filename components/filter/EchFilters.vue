<template>
  <div>
    <p>
      <span
        v-for="filter in showActionList"
        :key="filter.id"
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
      <span
        uk-icon="close"
        class="uk-margin-small-left ech-basic uk-link-reset"
        @click="resetFilters()"
      ></span>
    </p>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import MediaTypePaths from '../../middleware/modules/util/MediaTypePaths'
import MediaTypes from '../../middleware/modules/util/MediaTypes'
import * as ServiceLocator from '../../middleware/framework/modules/ServiceLocator'
const _isEmpty = require('lodash.isempty')

export default {
  name: 'EchFilters',
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
    showActionList() {
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
      const pathParams = this.$route.params.genre
      const slugger = ServiceLocator.Slugger.sluggify([filter.name])
      if (_isEmpty(pathParams)) {
        const slugger = ServiceLocator.Slugger.sluggify([filter.name])
        this.$router.push({
          path: `/${language}/${self.mediaTypePath}/bygenres/${slugger}`
        })
      }
      if (pathParams.includes(slugger)) {
        const finalPath = pathParams
          .split('_')
          .filter((it) => it !== slugger)
          .join('_')
        this.$router.push({
          path: `/${language}/${self.mediaTypePath}/bygenres/${finalPath}`
        })
      } else {
        const slugger = ServiceLocator.Slugger.sluggify([filter.name])
        const finalPath = `${pathParams}_${slugger}`
        this.$router.push({
          path: `/${language}/${self.mediaTypePath}/bygenres/${finalPath}`
        })
      }
    },
    isFilterIncluded(filter) {
      const pathParams = this.$route.params.genre
      const slugger = ServiceLocator.Slugger.sluggify([filter.name])
      return !_isEmpty(pathParams) && pathParams.includes(slugger)
    },
    resetFilters() {
      const self = this
      const language = this.$i18n.locale
      this.$router.push({
        path: `/${language}/${self.mediaTypePath}/bygenres/`
      })
    }
  }
}
</script>
