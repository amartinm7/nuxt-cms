import RequestHeader from '../../../framework/modules/requestHeader/RequestHeader'

export default {
  methods: {
    getSection(mediaType) {
      return this.$i18n.messages[this.$i18n.locale].pages[mediaType][
        this.$route.params.upcoming
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
