export default {
  methods: {
    currentLocale() {
      return this.$i18n.locales.find(
        (locale) => locale.code === this.$i18n.locale
      )
    },
    getCountryFrom(isoCode) {
      return this.$i18n.messages[this.$i18n.locale].countries.values.find(
        (country) => country.code === isoCode
      )
    },
    getCountryNameFrom(isoCode) {
      return this.getCountryFrom(isoCode)?.name ?? ''
    },
    getLanguageFrom(isoCode) {
      return this.$i18n.messages[this.$i18n.locale].languages.values.find(
        (language) => language.code.toLowerCase() === isoCode
      )
    },
    getLanguageNameFrom(isoCode) {
      return this.getLanguageFrom(isoCode)?.name ?? ''
    }
  },
  computed: {
    language() {
      return this.$i18n.locale
    }
  }
}
