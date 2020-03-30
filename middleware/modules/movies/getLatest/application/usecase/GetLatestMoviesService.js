import { GetLatestMoviesRepositoryRequest } from '../../../../framework/repository/movies/usecase/GetLatestMoviesRepository'

class GetLatestMoviesService {
  constructor({ getLatestMoviesRepository }) {
    this._getLatestMoviesRepository = getLatestMoviesRepository
  }

  async execute(getLatestFilmsServiceRequest) {
    console.log('>>>GetLatestMoviesService.execute')
    const getLatestMoviesServiceResponse = await this._getLatestMoviesRepository.executeAsync(
      new GetLatestMoviesRepositoryRequest()
    )
    return {
      ...getLatestMoviesServiceResponse
    }
  }
}

class GetLatestMoviesServiceRequest {
  // eslint-disable-next-line no-useless-constructor
  constructor() {}
}

export { GetLatestMoviesService, GetLatestMoviesServiceRequest }
