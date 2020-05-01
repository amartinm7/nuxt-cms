import { GetLatestTvShowServiceRequest } from '../../application/usecase/GetLatestTvShowService'
/* eslint-disable camelcase, no-console */
class GetLatestTvShowController {
  constructor({ getLatestTvShowService }) {
    this._getLatestTvShowService = getLatestTvShowService
  }

  async execute(getLatestTvShowControllerRequest) {
    const getLatestTvShowServiceResponse = await this._getLatestTvShowService.execute(
      new GetLatestTvShowServiceRequest({
        ...getLatestTvShowControllerRequest
      })
    )
    return getLatestTvShowServiceResponse
  }
}

/* eslint-disable camelcase */
class GetLatestTvShowControllerRequest {
  constructor({ language }) {
    this.language = language
  }
}

export { GetLatestTvShowController, GetLatestTvShowControllerRequest }
