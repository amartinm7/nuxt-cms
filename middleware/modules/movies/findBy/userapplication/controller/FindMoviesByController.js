import { FindMoviesByServiceRequest } from '../../application/usecase/FindMoviesByService'
/* eslint-disable camelcase, no-console */
class FindMoviesByController {
  constructor({ findMoviesByService }) {
    this._findMoviesByService = findMoviesByService
  }

  async execute(findMoviesByControllerRequest) {
    const findMoviesByServiceResponse = await this._findMoviesByService.execute(
      new FindMoviesByServiceRequest({
        ...findMoviesByControllerRequest
      })
    )
    return findMoviesByServiceResponse
  }
}

/* eslint-disable camelcase */
class FindMoviesByControllerRequest {
  constructor({ genres_ids, language, sortedBy }) {
    this.genres_ids = genres_ids
    this.language = language
    this.sortedBy = sortedBy
  }
}

export { FindMoviesByController, FindMoviesByControllerRequest }
