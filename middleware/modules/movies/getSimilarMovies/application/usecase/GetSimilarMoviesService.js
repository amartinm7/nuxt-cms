import { GetSimilarMoviesRepositoryRequest } from '../../infrastructure/repository/GetSimilarMoviesRepository'
/* eslint-disable camelcase, no-console */
class GetSimilarMoviesService {
  constructor({ getSimilarMoviesRepository }) {
    this._getSimilarMoviesRepository = getSimilarMoviesRepository
  }

  async execute(getSimilarMoviesServiceRequest) {
    const getSimilarMoviesRepositoryResponse = await this._getSimilarMoviesRepository.executeAsync(
      new GetSimilarMoviesRepositoryRequest({
        ...getSimilarMoviesServiceRequest
      })
    )
    return {
      ...getSimilarMoviesRepositoryResponse
    }
  }
}

class GetSimilarMoviesServiceRequest {
  constructor({ movie_id, language, page }) {
    this.movie_id = movie_id
    this.language = language
    this.page = page
  }
}

export { GetSimilarMoviesService, GetSimilarMoviesServiceRequest }
