import ActionMapper from '../../../ActionMapper'

class GetTrendingUseCase {
  async getTrending(mediaType, action, language) {
    // const mediaType = MEDIA_TYPES.TV
    const trendingMovies = await ActionMapper.getController({
      mediaType,
      action
    }).execute({ language })
    return { trendingMovies }
  }
}

export { GetTrendingUseCase }
