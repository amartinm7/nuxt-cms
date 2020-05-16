export default {
  methods: {
    currentLocale() {
      return this.$i18n.locales.find(
        (locale) => locale.code === this.$i18n.locale
      )
    }
  }
}
