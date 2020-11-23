export default {
  methods: {
    getRelatedShowsURL({ id, mediaType, page, language }) {
      return `/${language}/${mediaType}/${id}/similar/${Date.now()}?page=${page}`
    }
  }
}
