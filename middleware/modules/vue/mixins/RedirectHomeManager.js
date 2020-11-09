export default {
  mounted() {
    const search = this.trendingShows || this.multiSearch
    if (search._total_results === 0) {
      const language = this.$i18n.locale
      const route = async () => {
        await this.$router.push({
          path: `/${language}`
        })
      }
      route()
    }
  }
}
