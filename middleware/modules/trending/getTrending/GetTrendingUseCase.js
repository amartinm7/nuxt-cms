import ActionMapper from '../../../ActionMapper'

class GetTrendingUseCase {
  async getTrending({ mediaType, action, language }) {
    // const mediaType = MEDIA_TYPES.TV
    const trendingTVShows = await ActionMapper.getController({
      mediaType,
      action
    }).execute({ language })
    return { trendingTVShows }
  }
}

export { GetTrendingUseCase }
