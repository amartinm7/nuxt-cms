import { GetRecommendedMoviesRepositoryRequest } from '../../infrastructure/repository/GetRecommendedMoviesRepository'
/* eslint-disable camelcase, no-console */
class GetRecommendedMoviesService {
  constructor({ getRecommendedMoviesRepository }) {
    this._getRecommendedMoviesRepository = getRecommendedMoviesRepository
  }

  async execute(getRecommendedMoviesServiceRequest) {
    const getRecommendedMoviesRepositoryResponse = await this._getRecommendedMoviesRepository.executeAsync(
      new GetRecommendedMoviesRepositoryRequest({
        ...getRecommendedMoviesServiceRequest
      })
    )
    return {
      ...getRecommendedMoviesRepositoryResponse
    }
  }
}

class GetRecommendedMoviesServiceRequest {
  constructor({ movie_id, language, page }) {
    this.movie_id = movie_id
    this.language = language
    this.page = page
  }
}

export { GetRecommendedMoviesService, GetRecommendedMoviesServiceRequest }
