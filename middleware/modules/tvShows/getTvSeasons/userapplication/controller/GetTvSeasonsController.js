import { GetTvSeasonsServiceRequest } from '../../application/usecase/GetTvSeasonsService'
/* eslint-disable camelcase, no-console */
class GetTvSeasonsController {
  constructor({ getTvSeasonsService }) {
    this._getTvSeasonsService = getTvSeasonsService
  }

  async execute(getTvSeasonsControllerRequest) {
    const getTvSeasonsServiceResponse = await this._getTvSeasonsService.execute(
      new GetTvSeasonsServiceRequest({
        ...getTvSeasonsControllerRequest
      })
    )
    return getTvSeasonsServiceResponse
  }
}

/* eslint-disable camelcase */
class GetTvSeasonsControllerRequest {
  constructor({ movie_id, movie_name, language, season_number }) {
    this.movie_id = movie_id
    this.movie_name = movie_name
    this.language = language
    this.season_number = season_number
  }
}

export { GetTvSeasonsController, GetTvSeasonsControllerRequest }
