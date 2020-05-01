import { GetAiringTodayTvShowRepositoryRequest } from '../../infrastructure/repository/GetAiringTodayTvShowRepository'
/* eslint-disable camelcase, no-console */
class GetAiringTodayTvShowService {
  constructor({ getAiringTodayTvShowRepository }) {
    this._getAiringTodayTvShowRepository = getAiringTodayTvShowRepository
  }

  async execute(getAiringTodayTvShowServiceRequest) {
    const getAiringTodayTvShowRepositoryResponse = await this._getAiringTodayTvShowRepository.executeAsync(
      new GetAiringTodayTvShowRepositoryRequest({
        ...getAiringTodayTvShowServiceRequest
      })
    )
    return {
      ...getAiringTodayTvShowRepositoryResponse
    }
  }
}

class GetAiringTodayTvShowServiceRequest {
  constructor({ page, language }) {
    this.page = page
    this.language = language
  }
}

export { GetAiringTodayTvShowService, GetAiringTodayTvShowServiceRequest }
