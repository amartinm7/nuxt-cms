/* eslint-disable camelcase, no-console */
import MediaHandler from '@/middleware/framework/modules/media/MediaHandler'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import Slugger from '@/middleware/framework/modules/slugger/Slugger'
const _isEmpty = require('lodash.isempty')

export default {
  methods: {
    getPosterURL(posterPath) {
      return MediaHandler.getPosterURL(posterPath)
    },
    getPoster2XURL(posterPath) {
      return MediaHandler.getPoster2XURL(posterPath)
    },
    getDetailPathURL(movie_id, movie_title, mediaType) {
      const language = this.$i18n.locale
      const slugger = Slugger.sluggify([movie_title])
      return `/${language}/${mediaType}/details/${movie_id}-${slugger}`
    },
    getNetWorkURL(logoPath) {
      if (!logoPath) return ''
      // const sanitizedLogoPath = logoPath ?? ValuesByDefault.logoPath
      return `https://image.tmdb.org/t/p/h60${logoPath}`
    },
    getNetWorkURLByArray(network) {
      return this.getNetWorkURL(network?._logo_path)
    },
    getTvShowByNetworkURL(network) {
      const language = this.$i18n.locale
      const mediaTypeTV = MediaTypes.tv
      const networkId = network?._id
      return `/${language}/${mediaTypeTV}/byNetwork/${Date.now()}/${networkId}/?sortedBy=popularity.desc`
    },
    getTvShowByGenreURL(genre) {
      const language = this.$i18n.locale
      const mediaTypeTV = MediaTypes.tv
      // const genreName = Slugger.sluggify([genre.name])
      // return `/${language}/${mediaTypeTV}/bygenres/${Date.now()}/${genreName}/?sortedBy=popularity.desc`
      return `/${language}/${mediaTypeTV}/bygenres/${Date.now()}/${
        genre.id
      }/?sortedBy=popularity.desc`
    },
    getVideoURLFrom(key) {
      const url = `https://www.youtube.com/embed/${key}?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1`
      return url
    },
    existsCredits(credits) {
      return !_isEmpty(credits)
    },
    existsPosters(posters) {
      return !_isEmpty(posters)
    },
    existsVideos(videos) {
      return !_isEmpty(videos)
    }
  }
}
