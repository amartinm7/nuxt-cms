import MediaTypes from '@/middleware/modules/domain/MediaTypes'

export default {
  methods: {
    getRecommendedMoviesURL({ id }) {
      const language = this.$i18n.locale
      return `/${language}/${
        MediaTypes.movie
      }/recommended/${Date.now()}/${id}?page=1`
    }
  }
}
