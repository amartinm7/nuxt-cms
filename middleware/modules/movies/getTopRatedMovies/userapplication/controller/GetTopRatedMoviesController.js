import { GetTopRatedMoviesServiceRequest } from '../../application/usecase/GetTopRatedMoviesService'
/* eslint-disable camelcase, no-console */
class GetTopRatedMoviesController {
  constructor({ getTopRatedMoviesService }) {
    this._getTopRatedMoviesService = getTopRatedMoviesService
  }

  async execute(getTopRatedMoviesControllerRequest) {
    const getTopRatedMoviesServiceResponse = await this._getTopRatedMoviesService.execute(
      new GetTopRatedMoviesServiceRequest({
        ...getTopRatedMoviesControllerRequest
      })
    )
    return getTopRatedMoviesServiceResponse
  }
}

/* eslint-disable camelcase */
class GetTopRatedMoviesControllerRequest {
  constructor({ page, language }) {
    this.page = page
    this.language = language
  }
}

export { GetTopRatedMoviesController, GetTopRatedMoviesControllerRequest }
