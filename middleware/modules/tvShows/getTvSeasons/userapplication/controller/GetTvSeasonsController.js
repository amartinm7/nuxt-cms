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
  constructor({ movie_id, language }) {
    this.movie_id = movie_id
    this.language = language
  }
}

export { GetTvSeasonsController, GetTvSeasonsControllerRequest }
