/* eslint-disable camelcase, no-console */
export default {
  methods: {
    getTvShowTopListlURL(actionName) {
      const language = this.$i18n.locale
      return `/${language}/tvshows/${actionName}/`
    },
    getMoviesTopListlURL(actionName) {
      const language = this.$i18n.locale
      return `/${language}/movies/${actionName}/`
    }
  }
}
