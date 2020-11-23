/* eslint-disable camelcase, no-console */
import Slugger from '@/middleware/framework/modules/slugger/Slugger'
import ActionMapper from '@/middleware/ActionMapper'

export default {
  methods: {
    getTrendingURL({ actionNameIndex, mediaType, language, page }) {
      const actionName = this.translateKeyMessage({
        actionNameIndex,
        mediaType,
        language
      })
      const sluggifyActionName = Slugger.sluggify([actionNameIndex, actionName])
      return `/${language}/${mediaType}/trends/${Date.now()}/${sluggifyActionName}?page=${page}`
    },
    translateKeyMessage({ actionNameIndex, mediaType, language }) {
      const actionName = ActionMapper.getActionCodes()?.[mediaType]?.[
        actionNameIndex
      ]
      return this.$i18n.messages[language].pages?.[mediaType]?.[actionName]
    }
  }
}
