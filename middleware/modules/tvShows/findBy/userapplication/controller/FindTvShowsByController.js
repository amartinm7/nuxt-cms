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
  constructor({ genres_ids, language, sortedBy }) {
    this.genres_ids = genres_ids
    this.language = language
    this.sortedBy = sortedBy
  }
}

export { FindTvShowsByController, FindTvShowsByControllerRequest }
