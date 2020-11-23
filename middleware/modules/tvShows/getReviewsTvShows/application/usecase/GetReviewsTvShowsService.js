import { GetReviewsTvShowsRepositoryRequest } from '../../infrastructure/repository/GetReviewsTvShowsRepository'
/* eslint-disable camelcase, no-console */
class GetReviewsTvShowsService {
  constructor({ getReviewsTvShowsRepository }) {
    this._getReviewsTvShowsRepository = getReviewsTvShowsRepository
  }

  async execute(getReviewsTvShowsServiceRequest) {
    const getReviewsTvShowsRepositoryResponse = await this._getReviewsTvShowsRepository.executeAsync(
      new GetReviewsTvShowsRepositoryRequest({
        ...getReviewsTvShowsServiceRequest
      })
    )
    return {
      ...getReviewsTvShowsRepositoryResponse
    }
  }
}

class GetReviewsTvShowsServiceRequest {
  constructor({ movie_id, language }) {
    this.movie_id = movie_id
    this.language = language
  }
}

export { GetReviewsTvShowsService, GetReviewsTvShowsServiceRequest }
