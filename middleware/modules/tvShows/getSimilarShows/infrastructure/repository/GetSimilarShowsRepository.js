import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'

/* eslint-disable camelcase, no-console */
class GetSimilarShowsRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get getSimilarShows
   * @param getSimilarShowsRepositoryRequest
   * @returns {*}
   */
  execute(getSimilarShowsRepositoryRequest) {
    const { showId, language, page } = { ...getSimilarShowsRepositoryRequest }
    const urlPath = `/tv/${showId}/similar?language=${language}&page=${page}&append_to_response=images,credits,keywords,reviews,videos`
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(getSimilarShowsRepositoryRequest) {
    const axiosResponse = await this.execute(getSimilarShowsRepositoryRequest)
    return new GetSimilarShowsRepositoryResponse({ ...axiosResponse.data })
  }
}

class GetSimilarShowsRepositoryRequest {
  constructor({ showId, language, page = 1 }) {
    this.showId = showId
    this.language = language
    this.page = page
  }
}

/* eslint-disable camelcase */
class GetSimilarShowsRepositoryResponse {
  constructor({ page, total_pages, total_results, results }) {
    this._page = page
    this._total_pages = total_pages
    this._total_results = total_results
    this._results = results.map((it) => {
      // eslint-disable-next-line no-new
      return new GetSimilarShowsRepositoryResponseResult(it)
    })
  }
}

class GetSimilarShowsRepositoryResponseResult {
  constructor({
    id,
    title,
    name,
    vote_account,
    vote_average,
    release_date,
    overview,
    adult,
    genre_ids,
    poster_path,
    backdrop_path,
    popularity,
    media_type
  }) {
    this._id = id
    this._title = title
    this._name = name
    this._vote_account = vote_account
    this._vote_average = vote_average
    this._release_date = release_date
    this._overview = overview
    this._adult = adult
    this._genre_ids = genre_ids
    this._poster_path = poster_path
    this._backdrop_path = backdrop_path
    this._popularity = popularity
    this._media_type = MediaTypes.tv
  }
}

export {
  GetSimilarShowsRepository,
  GetSimilarShowsRepositoryRequest,
  GetSimilarShowsRepositoryResponse,
  GetSimilarShowsRepositoryResponseResult
}
