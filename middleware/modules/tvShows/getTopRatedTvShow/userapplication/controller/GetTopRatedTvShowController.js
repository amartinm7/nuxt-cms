import { GetTopRatedTvShowServiceRequest } from '../../application/usecase/GetTopRatedTvShowService'
/* eslint-disable camelcase, no-console */
class GetTopRatedTvShowController {
  constructor({ getTopRatedTvShowService }) {
    this._getTopRatedTvShowService = getTopRatedTvShowService
  }

  async execute(getTopRatedTvShowControllerRequest) {
    const getTopRatedTvShowServiceResponse = await this._getTopRatedTvShowService.execute(
      new GetTopRatedTvShowServiceRequest({
        ...getTopRatedTvShowControllerRequest
      })
    )
    return getTopRatedTvShowServiceResponse
  }
}

/* eslint-disable camelcase */
class GetTopRatedTvShowControllerRequest {
  constructor({ page, language }) {
    this.page = page
    this.language = language
  }
}

export { GetTopRatedTvShowController, GetTopRatedTvShowControllerRequest }
