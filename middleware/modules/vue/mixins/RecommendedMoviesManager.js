import Slugger from '@/middleware/framework/modules/slugger/Slugger'

export default {
  methods: {
    getRecommendedMoviesURL({ movie, mediaType, language, page }) {
      const title = movie._name ?? movie._title ?? ''
      const slugger = Slugger.sluggify(title.split('-'))
      return `/${language}/${mediaType}/${
        movie._id
      }-${slugger}/recommended/${Date.now()}?page=${page}`
    }
  }
}
