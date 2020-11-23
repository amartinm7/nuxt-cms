import { GetRecommendedTvShowsServiceRequest } from '../../application/usecase/GetRecommendedTvShowsService'
/* eslint-disable camelcase, no-console */
class GetRecommendedTvShowsController {
  constructor({ getRecommendedTvShowsService }) {
    this._getRecommendedTvShowsService = getRecommendedTvShowsService
  }

  async execute(getRecommendedTvShowsControllerRequest) {
    const getRecommendedTvShowsServiceResponse = await this._getRecommendedTvShowsService.execute(
      new GetRecommendedTvShowsServiceRequest({
        ...getRecommendedTvShowsControllerRequest
      })
    )
    return getRecommendedTvShowsServiceResponse
  }
}

/* eslint-disable camelcase */
class GetRecommendedTvShowsControllerRequest {
  constructor({ movie_id, language, page }) {
    this.movie_id = movie_id
    this.language = language
    this.page = page
  }
}

export {
  GetRecommendedTvShowsController,
  GetRecommendedTvShowsControllerRequest
}
