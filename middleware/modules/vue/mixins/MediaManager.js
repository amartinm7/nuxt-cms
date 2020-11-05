/* eslint-disable camelcase, no-console */
import MediaHandler from '@/middleware/framework/modules/media/MediaHandler'
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
      return `/${language}/${mediaType}/${movie_id}-${slugger}`
    },
    getByGenreURL(genre, mediaType) {
      const language = this.$i18n.locale
      return `/${language}/${mediaType}/bygenres/${Date.now()}/${
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
    },
    emitMessagePlayVideo(url) {
      this.url = url ?? ''
      this.$emit('outbound-open-video-modal', url)
    },
    getTitle(movie) {
      return movie?._title || movie?._name
    }
  }
}
