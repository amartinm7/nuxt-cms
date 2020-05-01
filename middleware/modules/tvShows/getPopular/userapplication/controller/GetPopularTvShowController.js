import { GetPopularTvShowServiceRequest } from '../../application/usecase/GetPopularTvShowService'
/* eslint-disable camelcase, no-console */
class GetPopularTvShowController {
  constructor({ getPopularTvShowService }) {
    this._getPopularTvShowService = getPopularTvShowService
  }

  async execute(getPopularTvShowControllerRequest) {
    const getPopularTvShowServiceResponse = await this._getPopularTvShowService.execute(
      new GetPopularTvShowServiceRequest({
        ...getPopularTvShowControllerRequest
      })
    )
    return getPopularTvShowServiceResponse
  }
}

/* eslint-disable camelcase */
class GetPopularTvShowControllerRequest {
  constructor({ page, language }) {
    this.page = page
    this.language = language
  }
}

export { GetPopularTvShowController, GetPopularTvShowControllerRequest }
