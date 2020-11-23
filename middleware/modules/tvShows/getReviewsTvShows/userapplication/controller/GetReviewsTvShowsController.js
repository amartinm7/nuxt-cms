import { GetReviewsTvShowsServiceRequest } from '../../application/usecase/GetReviewsTvShowsService'
/* eslint-disable camelcase, no-console */
class GetReviewsTvShowsController {
  constructor({ getReviewsTvShowsService }) {
    this._getReviewsTvShowsService = getReviewsTvShowsService
  }

  async execute(getReviewsTvShowsControllerRequest) {
    const getReviewsTvShowsServiceResponse = await this._getReviewsTvShowsService.execute(
      new GetReviewsTvShowsServiceRequest({
        ...getReviewsTvShowsControllerRequest
      })
    )
    return getReviewsTvShowsServiceResponse
  }
}

/* eslint-disable camelcase */
class GetReviewsTvShowsControllerRequest {
  constructor({ movie_id, language }) {
    this.movie_id = movie_id
    this.language = language
  }
}

export { GetReviewsTvShowsController, GetReviewsTvShowsControllerRequest }
