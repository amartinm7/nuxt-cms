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

export default {
  name: 'EchTvFiltersBy',
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
    },
    isARightMediaPath() {
      return this.$route.path.includes(this.mediaType)
    }
  },
  methods: {
    findBy(filter) {
      const language = this.$i18n.locale
      const queryParam = this.$route.query.sortedBy
      const sortedByQueryParam =
        queryParam === undefined || queryParam === ''
          ? 'popularity.desc'
          : this.$route.query.sortedBy
      const sortedBy = this.isARightMediaPath ? sortedByQueryParam : ''
      this.$router.push({
        path: `/${language}/${this.mediaType}/bygenres/${Date.now()}/${
          filter.id
        }`,
        query: {
          sortedBy
        }
      })
    },
    isFilterIncluded(filter) {
      const genreId = this.$route.params.genre ?? ''
      return this.isARightMediaPath && genreId === String(filter.id)
    },
    resetFilters() {
      const self = this
      const language = this.$i18n.locale
      const queryParamsSortedBy =
        this.$route.query.sortedBy ?? 'popularity.desc'
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
