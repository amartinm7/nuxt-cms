const _isEmpty = require('lodash.isempty')

export default {
  mounted() {
    const search = this.trendingShows || this.multiSearch
    if (
      _isEmpty(search) ||
      search._results?.length === 0 ||
      search._total_results === 0
    ) {
      const language = this.$i18n.locale
      const route = async () => {
        await this.$router.push({
          path: `/${language}`
        })
      }
      route() // do push to the route
    }
  }
}
