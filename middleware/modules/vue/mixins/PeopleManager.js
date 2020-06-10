import * as ServiceLocator from '../../../framework/modules/ServiceLocator'
/* eslint-disable camelcase, no-console */
export default {
  methods: {
    getPeoplePathURL(people_id, people_name) {
      const language = this.$i18n.locale
      const slugger = ServiceLocator.Slugger.sluggify([people_name])
      return `/${language}/people/${people_id}-${slugger}`
    }
  }
}
