import { GetSimilarMoviesServiceRequest } from '../../application/usecase/GetSimilarMoviesService'
/* eslint-disable camelcase, no-console */
class GetSimilarMoviesController {
  constructor({ getSimilarMoviesService }) {
    this._getSimilarMoviesService = getSimilarMoviesService
  }

  async execute(getSimilarMoviesControllerRequest) {
    const getSimilarMoviesServiceResponse = await this._getSimilarMoviesService.execute(
      new GetSimilarMoviesServiceRequest({
        ...getSimilarMoviesControllerRequest
      })
    )
    return getSimilarMoviesServiceResponse
  }
}

/* eslint-disable camelcase */
class GetSimilarMoviesControllerRequest {
  constructor({ movie_id, language, page }) {
    this.movie_id = movie_id
    this.language = language
    this.page = page
  }
}

export { GetSimilarMoviesController, GetSimilarMoviesControllerRequest }
