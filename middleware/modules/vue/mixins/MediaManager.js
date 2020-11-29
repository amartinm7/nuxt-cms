/* eslint-disable camelcase, no-console */
import MediaHandler from '@/middleware/framework/modules/media/MediaHandler'
import Slugger from '@/middleware/framework/modules/slugger/Slugger'

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
    getVideoURLFrom(key) {
      const url = `https://www.youtube.com/embed/${key}?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1`
      return url
    },
    emitMessagePlayVideo(url) {
      this.url = url ?? ''
      this.$emit('outbound-open-video-modal', url)
    },
    getTitle(movie) {
      return movie?._title || movie?._name
    },
    initVideoURL(movie, index) {
      console.log(
        `initVideoURL testing key... "${movie?._videos[index]?._key}"`
      )
      if (!movie?._videos[index]?._key) return
      const url = this.getVideoURLFrom(movie?._videos[index]?._key)
      console.log('emit...' + url)
      this.emitMessagePlayVideo(url)
    },
    getVideoName(movie, index) {
      return movie?._videos?.[index]._name
    }
  }
}
