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
  constructor({ movie_id, movie_name, language, season_number }) {
    this.movie_id = movie_id
    this.movie_name = movie_name
    this.language = language
    this.season_number = season_number
  }
}

export { GetTvSeasonsService, GetTvSeasonsServiceRequest }
