import { GetPopularTvShowRepositoryRequest } from '../../infrastructure/repository/GetPopularTvShowRepository'
/* eslint-disable camelcase, no-console */
class GetPopularTvShowService {
  constructor({ getPopularTvShowRepository }) {
    this._getPopularTvShowRepository = getPopularTvShowRepository
  }

  async execute(getPopularTvShowServiceRequest) {
    const getPopularTvShowRepositoryResponse = await this._getPopularTvShowRepository.executeAsync(
      new GetPopularTvShowRepositoryRequest({
        ...getPopularTvShowServiceRequest
      })
    )
    return {
      ...getPopularTvShowRepositoryResponse
    }
  }
}

class GetPopularTvShowServiceRequest {
  constructor({ page, language }) {
    this.page = page
    this.language = language
  }
}

export { GetPopularTvShowService, GetPopularTvShowServiceRequest }
