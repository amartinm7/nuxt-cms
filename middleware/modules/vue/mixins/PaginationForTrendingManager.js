import ActionMapper from '@/middleware/ActionMapper'

export default (mediaType) => ({
  async asyncData({ app, params, query }) {
    const language = app.i18n.locale
    const action = params.index?.split('-')[0]
    const currentPage = isNaN(query.page) ? 1 : Number(query.page)
    const trendingShows = await ActionMapper.getController({
      mediaType,
      action
    }).execute({ language, page: currentPage })
    return {
      trendingShows,
      page: currentPage,
      actionNameIndex: action,
      language
    }
  }
})
