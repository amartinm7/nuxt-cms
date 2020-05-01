import { GetAiringTodayTvShowServiceRequest } from '../../application/usecase/GetAiringTodayTvShowService'
/* eslint-disable camelcase, no-console */
class GetAiringTodayTvShowController {
  constructor({ getAiringTodayTvShowService }) {
    this._getAiringTodayTvShowService = getAiringTodayTvShowService
  }

  async execute(getAiringTodayTvShowControllerRequest) {
    const getAiringTodayTvShowServiceResponse = await this._getAiringTodayTvShowService.execute(
      new GetAiringTodayTvShowServiceRequest({
        ...getAiringTodayTvShowControllerRequest
      })
    )
    return getAiringTodayTvShowServiceResponse
  }
}

/* eslint-disable camelcase */
class GetAiringTodayTvShowControllerRequest {
  constructor({ page, language }) {
    this.page = page
    this.language = language
  }
}

export { GetAiringTodayTvShowController, GetAiringTodayTvShowControllerRequest }
