import { GetTvSeasonsRepositoryRequest } from '../../infrastructure/repository/GetTvSeasonsRepository'
/* eslint-disable camelcase, no-console */
class GetTvSeasonsService {
  constructor({ getTvSeasonsRepository }) {
    this._getTvSeasonsRepository = getTvSeasonsRepository
  }

  async execute(getTvSeasonsServiceRequest) {
    const getTvSeasonsRepositoryResponse = await this._getTvSeasonsRepository.executeAsync(
      new GetTvSeasonsRepositoryRequest({
        ...getTvSeasonsServiceRequest
      })
    )
    return {
      ...getTvSeasonsRepositoryResponse
    }
  }
}

class GetTvSeasonsServiceRequest {
  constructor({ movie_id, language }) {
    this.movie_id = movie_id
    this.language = language
  }
}

export { GetTvSeasonsService, GetTvSeasonsServiceRequest }
