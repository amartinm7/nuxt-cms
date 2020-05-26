/* eslint-disable camelcase, no-console */
import * as ServiceLocator from '../../../framework/modules/ServiceLocator'
import ValuesByDefault from '../../util/ValuesByDefault'
const _isEmpty = require('lodash.isempty')

export default {
  methods: {
    getPosterURL(posterPath) {
      const sanitizedPosterPath = posterPath ?? ValuesByDefault.posterPath
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2${sanitizedPosterPath}`
    },
    getDetailPathURL(movie_id, movie_title, mediaType) {
      const language = this.$i18n.locale
      const slugger = ServiceLocator.Slugger.sluggify([movie_title])
      return `/${language}/${mediaType}/details/${movie_id}-${slugger}`
    },
    getNetWorkURL(logoPath) {
      // const sanitizedLogoPath = logoPath ?? ValuesByDefault.logoPath
      return `https://image.tmdb.org/t/p/h60/${logoPath}`
    },
    getNetWorkURLByArray(networks) {
      return !_isEmpty(networks) && !_isEmpty(networks[0])
        ? this.getNetWorkURL(networks[0]._logo_path)
        : ''
    },
    getVideoURLFrom(key) {
      const url = `https://www.youtube.com/embed/${key}?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1`
      return url
    }
  }
}
