import { GetSimilarShowsRepositoryRequest } from '../../infrastructure/repository/GetSimilarShowsRepository'
/* eslint-disable camelcase, no-console */
class GetSimilarShowsService {
  constructor({ getSimilarShowsRepository }) {
    this._getSimilarShowsRepository = getSimilarShowsRepository
  }

  async execute(getSimilarShowsServiceRequest) {
    const getSimilarShowsRepositoryResponse = await this._getSimilarShowsRepository.executeAsync(
      new GetSimilarShowsRepositoryRequest({
        ...getSimilarShowsServiceRequest
      })
    )
    return {
      ...getSimilarShowsRepositoryResponse
    }
  }
}

class GetSimilarShowsServiceRequest {
  constructor({ showId, language, page }) {
    this.showId = showId
    this.language = language
    this.page = page
  }
}

export { GetSimilarShowsService, GetSimilarShowsServiceRequest }
