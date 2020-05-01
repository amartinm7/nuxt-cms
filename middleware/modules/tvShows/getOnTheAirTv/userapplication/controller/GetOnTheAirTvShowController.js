import { GetOnTheAirTvShowServiceRequest } from '../../application/usecase/GetOnTheAirTvShowService'
/* eslint-disable camelcase, no-console */
class GetOnTheAirTvShowController {
  constructor({ getOnTheAirTvShowService }) {
    this._getOnTheAirTvShowService = getOnTheAirTvShowService
  }

  async execute(getOnTheAirTvShowControllerRequest) {
    const getOnTheAirTvShowServiceResponse = await this._getOnTheAirTvShowService.execute(
      new GetOnTheAirTvShowServiceRequest({
        ...getOnTheAirTvShowControllerRequest
      })
    )
    return getOnTheAirTvShowServiceResponse
  }
}

/* eslint-disable camelcase */
class GetOnTheAirTvShowControllerRequest {
  constructor({ page, language }) {
    this.page = page
    this.language = language
  }
}

export { GetOnTheAirTvShowController, GetOnTheAirTvShowControllerRequest }
