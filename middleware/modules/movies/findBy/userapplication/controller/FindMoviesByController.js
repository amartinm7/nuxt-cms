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
  constructor({ genreId, language, sortedBy, page }) {
    this.genreId = genreId
    this.language = language
    this.sortedBy = sortedBy
    this.page = page
  }
}

export { FindMoviesByController, FindMoviesByControllerRequest }
