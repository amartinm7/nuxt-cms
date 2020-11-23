import { GetRecommendedTvShowsRepositoryRequest } from '../../infrastructure/repository/GetRecommendedTvShowsRepository'
/* eslint-disable camelcase, no-console */
class GetRecommendedTvShowsService {
  constructor({ getRecommendedTvShowsRepository }) {
    this._getRecommendedTvShowsRepository = getRecommendedTvShowsRepository
  }

  async execute(getRecommendedTvShowsServiceRequest) {
    const getRecommendedTvShowsRepositoryResponse = await this._getRecommendedTvShowsRepository.executeAsync(
      new GetRecommendedTvShowsRepositoryRequest({
        ...getRecommendedTvShowsServiceRequest
      })
    )
    return {
      ...getRecommendedTvShowsRepositoryResponse
    }
  }
}

class GetRecommendedTvShowsServiceRequest {
  constructor({ movie_id, language, page }) {
    this.movie_id = movie_id
    this.language = language
    this.page = page
  }
}

export { GetRecommendedTvShowsService, GetRecommendedTvShowsServiceRequest }
