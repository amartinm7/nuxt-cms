import { GetOnTheAirTvShowRepositoryRequest } from '../../infrastructure/repository/GetOnTheAirTvShowRepository'
/* eslint-disable camelcase, no-console */
class GetOnTheAirTvShowService {
  constructor({ getOnTheAirTvShowRepository }) {
    this._getOnTheAirTvShowRepository = getOnTheAirTvShowRepository
  }

  async execute(getOnTheAirTvShowServiceRequest) {
    const getOnTheAirTvShowRepositoryResponse = await this._getOnTheAirTvShowRepository.executeAsync(
      new GetOnTheAirTvShowRepositoryRequest({
        ...getOnTheAirTvShowServiceRequest
      })
    )
    return {
      ...getOnTheAirTvShowRepositoryResponse
    }
  }
}

class GetOnTheAirTvShowServiceRequest {
  constructor({ page, language }) {
    this.page = page
    this.language = language
  }
}

export { GetOnTheAirTvShowService, GetOnTheAirTvShowServiceRequest }
