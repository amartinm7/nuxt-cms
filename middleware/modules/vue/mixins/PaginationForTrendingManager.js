import ActionMapper from '@/middleware/ActionMapper'

export default (mediaType) => ({
  async asyncData({ app, params, query }) {
    const language = app.i18n.locale
    const action = params.index
    const currentPage = isNaN(query.page) ? 1 : Number(query.page)
    const trendingShows = await ActionMapper.getController({
      mediaType,
      action
    }).execute({ language, page: currentPage })
    return { trendingShows, action, page: currentPage }
  },
  methods: {
    async toPrevious() {
      const previousPage = this.page > 1 ? this.page - 1 : 1
      this.trendingShows = await ActionMapper.getTrending({
        language: this.$i18n.locale,
        mediaType: this.mediaType,
        action: this.action,
        page: previousPage
      })
      this.page = previousPage
    },
    async toNext() {
      const nextPage =
        this.page < this.trendingShows._total_pages
          ? this.page + 1
          : this.trendingShows._total_pages
      this.trendingShows = await ActionMapper.getTrending({
        language: this.$i18n.locale,
        mediaType: this.mediaType,
        action: this.action,
        page: nextPage
      })
      this.page = nextPage
    }
  }
})
