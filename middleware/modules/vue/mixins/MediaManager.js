/* eslint-disable camelcase, no-console */
import ValuesByDefault from '../../util/ValuesByDefault'
import * as ServiceLocator from '../../../framework/modules/ServiceLocator'
export default {
  methods: {
    getPosterURL(posterPath) {
      const sanitizedPosterPath = posterPath ?? ValuesByDefault.posterPath
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${sanitizedPosterPath}`
    },
    getDetailPathURL(movie_id, movie_title, mediaType) {
      const language = this.$i18n.locale
      const slugger = ServiceLocator.Slugger.sluggify([movie_title])
      return `/${language}/${mediaType}/details/${movie_id}-${slugger}`
    }
  }
}
