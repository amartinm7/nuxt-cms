/* eslint-disable camelcase, no-console */
import { GetLatestMoviesServiceRequest } from '../../application/usecase/GetLatestMoviesService'

class GetLatestMoviesController {
  constructor({ getLatestMoviesService }) {
    this._getLatestMoviesService = getLatestMoviesService
  }

  async execute(getLatestTvShowControllerRequest) {
    const getLatestMoviesServiceResponse = await this._getLatestMoviesService.execute(
      new GetLatestMoviesServiceRequest({
        ...getLatestTvShowControllerRequest
      })
    )
    return getLatestMoviesServiceResponse
  }
}

/* eslint-disable camelcase */
class GetLatestMoviesControllerRequest {
  constructor({ language }) {
    this.language = language
  }
}

export { GetLatestMoviesController, GetLatestMoviesControllerRequest }
