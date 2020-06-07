import { GetLatestMoviesRepositoryRequest } from '../../infrastructure/repository/GetLatestMoviesRepository'
/* eslint-disable camelcase, no-console */
class GetLatestMoviesService {
  constructor({ getLatestMoviesRepository }) {
    this._getLatestMoviesRepository = getLatestMoviesRepository
  }

  async execute(getLatestFilmsServiceRequest) {
    const getLatestMoviesServiceResponse = await this._getLatestMoviesRepository.executeAsync(
      new GetLatestMoviesRepositoryRequest({ ...getLatestFilmsServiceRequest })
    )
    return {
      ...getLatestMoviesServiceResponse
    }
  }
}

class GetLatestMoviesServiceRequest {
  // eslint-disable-next-line no-useless-constructor
  constructor({ language }) {
    this.language = language
  }
}

export { GetLatestMoviesService, GetLatestMoviesServiceRequest }
