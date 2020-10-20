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
  constructor({ tvId, language, page }) {
    this.tvId = tvId
    this.language = language
    this.page = page
  }
}

export { GetSimilarShowsController, GetSimilarShowsControllerRequest }
