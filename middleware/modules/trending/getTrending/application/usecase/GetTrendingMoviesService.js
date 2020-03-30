import { GetTrendingMoviesRepositoryRequest } from '../../../../framework/repository/trending/getTrending/GetTrendingMoviesRepository'

class GetTrendingMoviesService {
  constructor({ getTrendingMoviesRepository }) {
    this._getTrendingMoviesRepository = getTrendingMoviesRepository
  }

  async execute(getTrendingMoviesServiceRequest) {
    const getTrendingMoviesRepositoryResponse = await this._getTrendingMoviesRepository.executeAsync(
      new GetTrendingMoviesRepositoryRequest({
        ...getTrendingMoviesServiceRequest
      })
    )
    return {
      ...getTrendingMoviesRepositoryResponse
    }
  }
}

class GetTrendingMoviesServiceRequest {
  constructor({ mediaType, timeWindow }) {
    this.mediaType = mediaType
    this.timeWindow = timeWindow
  }
}

export { GetTrendingMoviesService, GetTrendingMoviesServiceRequest }
