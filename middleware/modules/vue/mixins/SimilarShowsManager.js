export default {
  methods: {
    getRelatedShowsURL({ id, mediaType }) {
      const language = this.$i18n.locale
      return `/${language}/${mediaType}/similar/${Date.now()}/${id}?page=1`
    }
  }
}
