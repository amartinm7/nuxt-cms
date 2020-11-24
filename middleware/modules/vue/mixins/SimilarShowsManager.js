import Slugger from '@/middleware/framework/modules/slugger/Slugger'

export default {
  methods: {
    getRelatedShowsURL({ movie, mediaType, page, language }) {
      const title = movie._name ?? movie._title ?? ''
      const slugger = Slugger.sluggify(title.split('-'))
      return `/${language}/${mediaType}/${
        movie._id
      }-${slugger}/similar/${Date.now()}?page=${page}`
    }
  }
}
