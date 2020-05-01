import { GetNowPlayingMoviesRepositoryRequest } from '../../infrastructure/repository/GetNowPlayingMoviesRepository'
/* eslint-disable camelcase, no-console */
class GetNowPlayingMoviesService {
  constructor({ getNowPlayingMoviesRepository }) {
    this._getNowPlayingMoviesRepository = getNowPlayingMoviesRepository
  }

  async execute(getNowPlayingMoviesServiceRequest) {
    const getNowPlayingMoviesRepositoryResponse = await this._getNowPlayingMoviesRepository.executeAsync(
      new GetNowPlayingMoviesRepositoryRequest({
        ...getNowPlayingMoviesServiceRequest
      })
    )
    return {
      ...getNowPlayingMoviesRepositoryResponse
    }
  }
}

class GetNowPlayingMoviesServiceRequest {
  constructor({ page, language }) {
    this.page = page
    this.language = language
  }
}

export { GetNowPlayingMoviesService, GetNowPlayingMoviesServiceRequest }
