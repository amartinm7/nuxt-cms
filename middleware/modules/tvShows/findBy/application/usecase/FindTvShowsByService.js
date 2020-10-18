import { FindTvShowsByRepositoryRequest } from '../../infrastructure/repository/FindTvShowsByRepository'
/* eslint-disable camelcase, no-console */
class FindTvShowsByService {
  constructor({ findTvShowsByRepository }) {
    this._findTvShowsByRepository = findTvShowsByRepository
  }

  async execute(findTvShowsByServiceRequest) {
    const findTvShowsByRepositoryResponse = await this._findTvShowsByRepository.executeAsync(
      new FindTvShowsByRepositoryRequest({
        ...findTvShowsByServiceRequest
      })
    )
    return {
      ...findTvShowsByRepositoryResponse
    }
  }
}

class FindTvShowsByServiceRequest {
  constructor({ genreId, language, sortedBy, page, networkId }) {
    this.genreId = genreId
    this.language = language
    this.sortedBy = sortedBy
    this.page = page
    this.networkId = networkId
  }
}

export { FindTvShowsByService, FindTvShowsByServiceRequest }
