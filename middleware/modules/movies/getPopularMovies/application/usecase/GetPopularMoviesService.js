import { GetPopularMoviesRepositoryRequest } from '../../infrastructure/repository/GetPopularMoviesRepository'
/* eslint-disable camelcase, no-console */
class GetPopularMoviesService {
  constructor({ getPopularMoviesRepository }) {
    this._getPopularMoviesRepository = getPopularMoviesRepository
  }

  async execute(getPopularMoviesServiceRequest) {
    const getPopularMoviesRepositoryResponse = await this._getPopularMoviesRepository.executeAsync(
      new GetPopularMoviesRepositoryRequest({
        ...getPopularMoviesServiceRequest
      })
    )
    return {
      ...getPopularMoviesRepositoryResponse
    }
  }
}

class GetPopularMoviesServiceRequest {
  constructor({ page, language }) {
    this.page = page
    this.language = language
  }
}

export { GetPopularMoviesService, GetPopularMoviesServiceRequest }
