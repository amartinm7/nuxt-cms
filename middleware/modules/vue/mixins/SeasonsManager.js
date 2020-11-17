import * as ServiceLocator from '../../../framework/modules/ServiceLocator'
/* eslint-disable camelcase, no-console */
export default {
  methods: {
    getSeasonsPathURL(seasons_id, mediaType, movie_id, movie_name) {
      const language = this.$i18n.locale
      const slugger = ServiceLocator.Slugger.sluggify([movie_name])
      return `/${language}/${mediaType}/${movie_id}-${slugger}/seasons/${seasons_id}`
    }
  }
}
