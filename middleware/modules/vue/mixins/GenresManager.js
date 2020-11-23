import Slugger from '@/middleware/framework/modules/slugger/Slugger'

export default {
  methods: {
    getByGenreURL({ genreId, genreName, mediaType, language, page }) {
      const slugger = Slugger.sluggify([genreName])
      return `/${language}/${mediaType}/bygenres/${Date.now()}/${genreId}-${slugger}/?page=${page}&sortedBy=popularity.desc`
    }
  }
}
