export default {
  methods: {
    getRelatedShowsURL({ id, mediaType }) {
      const language = this.$i18n.locale
      return `/${language}/${mediaType}/${id}/similar/${Date.now()}?page=1`
    }
  }
}
