import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
/* eslint-disable camelcase, no-console */
class GetSimilarMoviesRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get getSimilarMovies
   * @param getSimilarMoviesRepositoryRequest
   * @returns {*}
   */
  execute(getSimilarMoviesRepositoryRequest) {
    const { movie_id, language, page } = {
      ...getSimilarMoviesRepositoryRequest
    }
    const urlPath = `/movie/${movie_id}/similar?language=${language}&append_to_response=images,credits,keywords,reviews,videos&page=${page}`
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(getSimilarMoviesRepositoryRequest) {
    const axiosResponse = await this.execute(getSimilarMoviesRepositoryRequest)
    return new GetSimilarMoviesRepositoryResponse({ ...axiosResponse.data })
  }
}

class GetSimilarMoviesRepositoryRequest {
  constructor({ movie_id, language, page = 1 }) {
    this.movie_id = movie_id
    this.language = language
    this.page = page
  }
}

/* eslint-disable camelcase */
class GetSimilarMoviesRepositoryResponse {
  constructor({ page, total_pages, total_results, results }) {
    this._page = page
    this._total_pages = total_pages
    this._total_results = total_results
    this._results = results.map((it) => {
      // eslint-disable-next-line no-new
      return new GetSimilarMoviesRepositoryResponseResult(it)
    })
  }
}

class GetSimilarMoviesRepositoryResponseResult {
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
    this._media_type = MediaTypes.movie
  }
}

export {
  GetSimilarMoviesRepository,
  GetSimilarMoviesRepositoryRequest,
  GetSimilarMoviesRepositoryResponse,
  GetSimilarMoviesRepositoryResponseResult
}
