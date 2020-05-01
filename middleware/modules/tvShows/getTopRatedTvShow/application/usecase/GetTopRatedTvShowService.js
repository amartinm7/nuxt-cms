import { GetTopRatedTvShowRepositoryRequest } from '../../infrastructure/repository/GetTopRatedTvShowRepository'
/* eslint-disable camelcase, no-console */
class GetTopRatedTvShowService {
  constructor({ getTopRatedTvShowRepository }) {
    this._getTopRatedTvShowRepository = getTopRatedTvShowRepository
  }

  async execute(getTopRatedTvShowServiceRequest) {
    const getTopRatedTvShowRepositoryResponse = await this._getTopRatedTvShowRepository.executeAsync(
      new GetTopRatedTvShowRepositoryRequest({
        ...getTopRatedTvShowServiceRequest
      })
    )
    return {
      ...getTopRatedTvShowRepositoryResponse
    }
  }
}

class GetTopRatedTvShowServiceRequest {
  constructor({ page, language }) {
    this.page = page
    this.language = language
  }
}

export { GetTopRatedTvShowService, GetTopRatedTvShowServiceRequest }
