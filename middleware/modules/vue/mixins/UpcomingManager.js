import RequestHeader from '../../../framework/modules/requestHeader/RequestHeader'
import ActionMapper from '@/middleware/ActionMapper'
import Slugger from '@/middleware/framework/modules/slugger/Slugger'

export default {
  methods: {
    getSection({ mediaType, language }) {
      const actionNameIndex = this.$route.params.index?.split('-')[0]
      return this.translateKeyMessage({
        actionNameIndex,
        mediaType,
        language
      })
    },
    translateKeyMessage({ actionNameIndex, mediaType, language }) {
      const actionName = ActionMapper.getActionCodes()?.[mediaType]?.[
        actionNameIndex
      ]
      return this.$i18n.messages[language]?.pages?.[mediaType]?.[actionName]
    },
    getTrendingURL({ actionNameIndex, mediaType, language, page }) {
      const actionName = this.translateKeyMessage({
        actionNameIndex,
        mediaType,
        language
      })
      const sluggifyActionName = Slugger.sluggify([actionNameIndex, actionName])
      return `/${language}/${mediaType}/trends/${Date.now()}/${sluggifyActionName}?page=${page}`
    }
  },
  computed: {
    requestHeader() {
      const title = `Estrenos Cine Hoy: ${this.getSection(
        this.mediaType,
        this.$i18n.locale // coger este parametro de la url
      )}`
      return new RequestHeader({
        _title: title
      })
    }
  }
}
