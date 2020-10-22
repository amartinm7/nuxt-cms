import { GetSimilarShowsServiceRequest } from '../../application/usecase/GetSimilarShowsService'
/* eslint-disable camelcase, no-console */
class GetSimilarShowsController {
  constructor({ getSimilarShowsService }) {
    this._getSimilarShowsService = getSimilarShowsService
  }

  async execute(getSimilarShowsControllerRequest) {
    const getSimilarShowsServiceResponse = await this._getSimilarShowsService.execute(
      new GetSimilarShowsServiceRequest({
        ...getSimilarShowsControllerRequest
      })
    )
    return getSimilarShowsServiceResponse
  }
}

/* eslint-disable camelcase */
class GetSimilarShowsControllerRequest {
  constructor({ showId, language, page }) {
    this.showId = showId
    this.language = language
    this.page = page
  }
}

export { GetSimilarShowsController, GetSimilarShowsControllerRequest }
