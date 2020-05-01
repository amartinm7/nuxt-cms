import { GetTopRatedMoviesRepositoryRequest } from '../../infrastructure/repository/GetTopRatedMoviesRepository'
/* eslint-disable camelcase, no-console */
class GetTopRatedMoviesService {
  constructor({ getTopRatedMoviesRepository }) {
    this._getTopRatedMoviesRepository = getTopRatedMoviesRepository
  }

  async execute(getTopRatedMoviesServiceRequest) {
    const getTopRatedMoviesRepositoryResponse = await this._getTopRatedMoviesRepository.executeAsync(
      new GetTopRatedMoviesRepositoryRequest({
        ...getTopRatedMoviesServiceRequest
      })
    )
    return {
      ...getTopRatedMoviesRepositoryResponse
    }
  }
}

class GetTopRatedMoviesServiceRequest {
  constructor({ page, language }) {
    this.page = page
    this.language = language
  }
}

export { GetTopRatedMoviesService, GetTopRatedMoviesServiceRequest }
