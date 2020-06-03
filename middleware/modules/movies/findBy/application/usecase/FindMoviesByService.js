import { FindMoviesByRepositoryRequest } from '../../infrastructure/repository/FindMoviesByRepository'
/* eslint-disable camelcase, no-console */
class FindMoviesByService {
  constructor({ findMoviesByRepository }) {
    this._findMoviesByRepository = findMoviesByRepository
  }

  async execute(findMoviesByServiceRequest) {
    const findMoviesByRepositoryResponse = await this._findMoviesByRepository.executeAsync(
      new FindMoviesByRepositoryRequest({
        ...findMoviesByServiceRequest
      })
    )
    return {
      ...findMoviesByRepositoryResponse
    }
  }
}

class FindMoviesByServiceRequest {
  constructor({ genres_ids, language, sortedBy }) {
    this.genres_ids = genres_ids
    this.language = language
    this.sortedBy = sortedBy
  }
}

export { FindMoviesByService, FindMoviesByServiceRequest }
