import { GetUpcomingMoviesServiceRequest } from '../../application/usecase/GetUpcomingMoviesService'
/* eslint-disable camelcase, no-console */
class GetUpcomingMoviesController {
  constructor({ getUpcomingMoviesService }) {
    this._getUpcomingMoviesService = getUpcomingMoviesService
  }

  async execute(getUpcomingMoviesControllerRequest) {
    const getUpcomingMoviesServiceResponse = await this._getUpcomingMoviesService.execute(
      new GetUpcomingMoviesServiceRequest({
        ...getUpcomingMoviesControllerRequest
      })
    )
    return getUpcomingMoviesServiceResponse
  }
}

/* eslint-disable camelcase */
class GetUpcomingMoviesControllerRequest {
  constructor({ page, language }) {
    this.page = page
    this.language = language
  }
}

export { GetUpcomingMoviesController, GetUpcomingMoviesControllerRequest }
