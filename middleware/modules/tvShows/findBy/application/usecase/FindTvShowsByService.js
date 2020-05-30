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
  constructor({ genres_ids, language }) {
    this.genres_ids = genres_ids
    this.language = language
  }
}

export { FindTvShowsByService, FindTvShowsByServiceRequest }
