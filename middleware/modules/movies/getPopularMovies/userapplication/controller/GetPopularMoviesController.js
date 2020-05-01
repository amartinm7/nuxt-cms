import { GetPopularMoviesServiceRequest } from '../../application/usecase/GetPopularMoviesService'
/* eslint-disable camelcase, no-console */
class GetPopularMoviesController {
  constructor({ getPopularMoviesService }) {
    this._getPopularMoviesService = getPopularMoviesService
  }

  async execute(getPopularMoviesControllerRequest) {
    const getPopularMoviesServiceResponse = await this._getPopularMoviesService.execute(
      new GetPopularMoviesServiceRequest({
        ...getPopularMoviesControllerRequest
      })
    )
    return getPopularMoviesServiceResponse
  }
}

/* eslint-disable camelcase */
class GetPopularMoviesControllerRequest {
  constructor({ page, language }) {
    this.page = page
    this.language = language
  }
}

export { GetPopularMoviesController, GetPopularMoviesControllerRequest }
