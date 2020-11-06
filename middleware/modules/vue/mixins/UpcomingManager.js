import RequestHeader from '../../../framework/modules/requestHeader/RequestHeader'
import ActionMapper from '@/middleware/ActionMapper'

export default {
  methods: {
    getSection(mediaType) {
      const actionNameKey = this.$route.params.index?.split('-')[0]
      return this.translateKeyMessage(actionNameKey, mediaType)
    },
    translateKeyMessage(actionNameKey, mediaType) {
      const actionName = ActionMapper.getActionCodes()?.[mediaType]?.[
        actionNameKey
      ]
      return this.$i18n.messages[this.$i18n.locale].pages?.[mediaType]?.[
        actionName
      ]
    }
  },
  computed: {
    requestHeader() {
      const title = `Estrenos Cine Hoy: ${this.getSection(this.mediaType)}`
      return new RequestHeader({
        _title: title
      })
    }
  }
}
