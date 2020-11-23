export default {
  methods: {
    getRecommendedMoviesURL({ id, mediaType }) {
      const language = this.$i18n.locale
      return `/${language}/${mediaType}/${id}/recommended/${Date.now()}?page=1`
    }
  }
}
