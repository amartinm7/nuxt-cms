import { GetTrendingMoviesRepositoryRequest } from '../../infrastructure/repository/GetTrendingMoviesRepository'
/* eslint-disable camelcase, no-console */
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
  constructor({ mediaType, timeWindow, language }) {
    this.mediaType = mediaType
    this.timeWindow = timeWindow
    this.language = language
  }
}

export { GetTrendingMoviesService, GetTrendingMoviesServiceRequest }
