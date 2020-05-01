import { GetLatestTvShowRepositoryRequest } from '../../infrastructure/repository/GetLatestTvShowRepository'
/* eslint-disable camelcase, no-console */
class GetLatestTvShowService {
  constructor({ getLatestTvShowRepository }) {
    this._getLatestTvShowRepository = getLatestTvShowRepository
  }

  async execute(getLatestTvShowServiceRequest) {
    const getLatestTvShowRepositoryResponse = await this._getLatestTvShowRepository.executeAsync(
      new GetLatestTvShowRepositoryRequest({
        ...getLatestTvShowServiceRequest
      })
    )
    return {
      ...getLatestTvShowRepositoryResponse
    }
  }
}

class GetLatestTvShowServiceRequest {
  constructor({ language }) {
    this.language = language
  }
}

export { GetLatestTvShowService, GetLatestTvShowServiceRequest }
