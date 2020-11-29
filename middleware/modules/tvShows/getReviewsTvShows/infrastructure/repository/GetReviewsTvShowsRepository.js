import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
import GetReviewsTransformer from '@/middleware/modules/domain/responses/GetReviewsResponse'
/* eslint-disable camelcase, no-console */
class GetReviewsTvShowsRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get getReviewsTvShows
   * @param getReviewsTvShowsRepositoryRequest
   * @returns {*}
   */
  execute(getReviewsTvShowsRepositoryRequest) {
    const { movie_id, language } = { ...getReviewsTvShowsRepositoryRequest }
    const urlPath = `/tv/${movie_id}/reviews/?language=${language}&append_to_response=images,credits,keywords,reviews,videos`
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(getReviewsTvShowsRepositoryRequest) {
    const axiosResponse = await this.execute(getReviewsTvShowsRepositoryRequest)
    return new GetReviewsTvShowsRepositoryResponse({ ...axiosResponse.data })
  }
}

class GetReviewsTvShowsRepositoryRequest {
  constructor({ movie_id, language }) {
    this.movie_id = movie_id
    this.language = language
  }
}

/* eslint-disable camelcase */
class GetReviewsTvShowsRepositoryResponse {
  constructor({ page, total_pages, total_results, results }) {
    this._page = page
    this._total_pages = total_pages
    this._total_results = total_results
    this._results = GetReviewsTransformer.transform(results)
  }
}

export {
  GetReviewsTvShowsRepository,
  GetReviewsTvShowsRepositoryRequest,
  GetReviewsTvShowsRepositoryResponse
}
