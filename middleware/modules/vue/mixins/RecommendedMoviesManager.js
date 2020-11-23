export default {
  methods: {
    getRecommendedMoviesURL({ id, mediaType }) {
      const language = this.$i18n.locale
      return `/${language}/${mediaType}/recommended/${Date.now()}/${id}?page=1`
    }
  }
}
