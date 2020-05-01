import { GetNowPlayingMoviesServiceRequest } from '../../application/usecase/GetNowPlayingMoviesService'
/* eslint-disable camelcase, no-console */
class GetNowPlayingMoviesController {
  constructor({ getNowPlayingMoviesService }) {
    this._getNowPlayingMoviesService = getNowPlayingMoviesService
  }

  async execute(getNowPlayingMoviesControllerRequest) {
    const getNowPlayingMoviesServiceResponse = await this._getNowPlayingMoviesService.execute(
      new GetNowPlayingMoviesServiceRequest({
        ...getNowPlayingMoviesControllerRequest
      })
    )
    return getNowPlayingMoviesServiceResponse
  }
}

/* eslint-disable camelcase */
class GetNowPlayingMoviesControllerRequest {
  constructor({ page, language }) {
    this.page = page
    this.language = language
  }
}

export { GetNowPlayingMoviesController, GetNowPlayingMoviesControllerRequest }
