import { GetTrendingMoviesRepositoryRequest } from '../../../../framework/repository/trending/getTrending/GetTrendingMoviesRepository'

class GetTvVideosService {
  constructor({ getTvVideosRepository }) {
    this._getTvVideosRepository = getTvVideosRepository
  }

  execute(getTvVideosServiceRequest) {
    const getTvVideosRepositoryResponse = this._getTvVideosRepository.executeAsync(
      new GetTrendingMoviesRepositoryRequest({
        ...getTvVideosServiceRequest
      })
    )
    return {
      ...getTvVideosRepositoryResponse
    }
  }
}

class GetTvVideosServiceRequest {
  constructor({ id }) {
    this._id = id
  }
}

export { GetTvVideosService, GetTvVideosServiceRequest }
