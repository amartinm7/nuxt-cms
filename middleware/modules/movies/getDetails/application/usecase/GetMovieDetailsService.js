import { GetMovieDetailsRepositoryRequest } from '../../infrastructure/repository/GetMovieDetailsRepository'

class GetMovieDetailsService {
  constructor({ getMovieDetailsRepository}) {
    this._getMovieDetailsRepository = getMovieDetailsRepository
  }

  async execute(getMovieDetailsServiceRequest) {
    console.log('>>>GetMovieDetailsService.execute')
    const getMovieDetailsRepositoryResponse = await this._getMovieDetailsRepository.executeAsync(
      new GetMovieDetailsRepositoryRequest()
    )
    return {
      ...getMovieDetailsRepositoryResponse
    }
  }
}

class GetMovieDetailsServiceRequest {
  // eslint-disable-next-line no-useless-constructor
  constructor() {}
}

export { GetMovieDetailsService, GetMovieDetailsServiceRequest }
