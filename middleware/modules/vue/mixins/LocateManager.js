export default {
  methods: {
    currentLocale() {
      return this.$i18n.locales.find(
        (locale) => locale.code === this.$i18n.locale
      )
    },
    getCountryNameFrom(isoCode) {
      return (
        this.$i18n.messages[this.$i18n.locale].countries.values.find(
          (country) => country.code === isoCode
        ).name ?? ''
      )
    },
    getLanguageNameFrom(isoCode) {
      return (
        this.$i18n.messages[this.$i18n.locale].languages.values.find(
          (language) => language.code.toLowerCase() === isoCode
        ).name ?? ''
      )
    }
  }
}
