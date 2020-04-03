import { GetMovieDetailsRepositoryRequest } from '../../infrastructure/repository/GetMovieDetailsRepository'

class GetMovieDetailsService {
  constructor({ getMovieDetailsRepository }) {
    this._getMovieDetailsRepository = getMovieDetailsRepository
  }

  async execute(getMovieDetailsServiceRequest) {
    console.log('>>>GetMovieDetailsService.execute')
    const getMovieDetailsRepositoryResponse = await this._getMovieDetailsRepository.executeAsync(
      new GetMovieDetailsRepositoryRequest({ ...getMovieDetailsServiceRequest })
    )
    return {
      ...getMovieDetailsRepositoryResponse
    }
  }
}

/* eslint-disable camelcase */
class GetMovieDetailsServiceRequest {
  constructor({ movie_id }) {
    this.movie_id = movie_id
  }
}

export { GetMovieDetailsService, GetMovieDetailsServiceRequest }