/* eslint-disable camelcase, no-console */
import { GetTvShowDetailsRepositoryRequest } from '../../infrastructure/repository/GetTvShowDetailsRepository'

class GetTvShowDetailsService {
  constructor({ getTvShowDetailsRepository }) {
    this._getTvShowDetailsRepository = getTvShowDetailsRepository
  }

  async execute(getTvShowDetailsServiceRequest) {
    const getTvShowDetailsRepositoryResponse = await this._getTvShowDetailsRepository.executeAsync(
      new GetTvShowDetailsRepositoryRequest({
        ...getTvShowDetailsServiceRequest
      })
    )
    return {
      ...getTvShowDetailsRepositoryResponse
    }
  }
}

/* eslint-disable camelcase */
class GetTvShowDetailsServiceRequest {
  constructor({ movie_id, language }) {
    this.movie_id = movie_id
    this.language = language
  }
}

export { GetTvShowDetailsService, GetTvShowDetailsServiceRequest }
