import { GetUpcomingMoviesRepositoryRequest } from '../../infrastructure/repository/GetUpcomingMoviesRepository'
/* eslint-disable camelcase, no-console */
class GetUpcomingMoviesService {
  constructor({ getUpcomingMoviesRepository }) {
    this._getUpcomingMoviesRepository = getUpcomingMoviesRepository
  }

  async execute(getUpcomingMoviesServiceRequest) {
    const getUpcomingMoviesRepositoryResponse = await this._getUpcomingMoviesRepository.executeAsync(
      new GetUpcomingMoviesRepositoryRequest({
        ...getUpcomingMoviesServiceRequest
      })
    )
    return {
      ...getUpcomingMoviesRepositoryResponse
    }
  }
}

class GetUpcomingMoviesServiceRequest {
  constructor({ page, language }) {
    this.page = page
    this.language = language
  }
}

export { GetUpcomingMoviesService, GetUpcomingMoviesServiceRequest }
