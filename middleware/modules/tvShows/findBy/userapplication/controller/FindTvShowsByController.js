import { FindTvShowsByServiceRequest } from '../../application/usecase/FindTvShowsByService'
/* eslint-disable camelcase, no-console */
class FindTvShowsByController {
  constructor({ findTvShowsByService }) {
    this._findTvShowsByService = findTvShowsByService
  }

  async execute(findTvShowsByControllerRequest) {
    const findTvShowsByServiceResponse = await this._findTvShowsByService.execute(
      new FindTvShowsByServiceRequest({
        ...findTvShowsByControllerRequest
      })
    )
    return findTvShowsByServiceResponse
  }
}

/* eslint-disable camelcase */
class FindTvShowsByControllerRequest {
  constructor({ genreId, language, sortedBy, page, networkId }) {
    this.genreId = genreId
    this.language = language
    this.sortedBy = sortedBy
    this.page = page
    this.networkId = networkId
  }
}

export { FindTvShowsByController, FindTvShowsByControllerRequest }
