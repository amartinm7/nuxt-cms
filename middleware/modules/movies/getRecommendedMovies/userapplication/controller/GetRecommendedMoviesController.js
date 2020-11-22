import { GetRecommendedMoviesServiceRequest } from '../../application/usecase/GetRecommendedMoviesService'
/* eslint-disable camelcase, no-console */
class GetRecommendedMoviesController {
  constructor({ getRecommendedMoviesService }) {
    this._getRecommendedMoviesService = getRecommendedMoviesService
  }

  async execute(getRecommendedMoviesControllerRequest) {
    const getRecommendedMoviesServiceResponse = await this._getRecommendedMoviesService.execute(
      new GetRecommendedMoviesServiceRequest({
        ...getRecommendedMoviesControllerRequest
      })
    )
    return getRecommendedMoviesServiceResponse
  }
}

/* eslint-disable camelcase */
class GetRecommendedMoviesControllerRequest {
  constructor({ movie_id, language, page }) {
    this.movie_id = movie_id
    this.language = language
    this.page = page
  }
}

export { GetRecommendedMoviesController, GetRecommendedMoviesControllerRequest }
