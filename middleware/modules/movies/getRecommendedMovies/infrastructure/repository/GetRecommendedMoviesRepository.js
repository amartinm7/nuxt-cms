import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
/* eslint-disable camelcase, no-console */
class GetRecommendedMoviesRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get getRecommendedMovies
   * @param getRecommendedMoviesRepositoryRequest
   * @returns {*}
   */
  execute(getRecommendedMoviesRepositoryRequest) {
    const { movie_id, language, page } = {
      ...getRecommendedMoviesRepositoryRequest
    }
    const urlPath = `/movie/${movie_id}/recommendations?language=${language}&page=${page}`
    console.log('urlPath ' + urlPath)
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(getRecommendedMoviesRepositoryRequest) {
    const axiosResponse = await this.execute(
      getRecommendedMoviesRepositoryRequest
    )
    return new GetRecommendedMoviesRepositoryResponse({ ...axiosResponse.data })
  }
}

class GetRecommendedMoviesRepositoryRequest {
  constructor({ movie_id, language, page }) {
    this.movie_id = movie_id
    this.language = language
    this.page = page
  }
}

/* eslint-disable camelcase */
class GetRecommendedMoviesRepositoryResponse {
  constructor({ page, total_pages, total_results, results }) {
    this._page = page
    this._total_pages = total_pages
    this._total_results = total_results
    this._results = results.map((it) => {
      // eslint-disable-next-line no-new
      return new GetRecommendedMoviesRepositoryResponseResult(it)
    })
  }
}

class GetRecommendedMoviesRepositoryResponseResult {
  constructor({
    id,
    title,
    vote_account,
    vote_average,
    release_date,
    overview,
    adult,
    genre_ids,
    poster_path,
    backdrop_path,
    popularity,
    original_title,
    original_language
  }) {
    this._id = id
    this._title = title
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
    this._original_title = original_title
    this._original_language = original_language
  }
}

export {
  GetRecommendedMoviesRepository,
  GetRecommendedMoviesRepositoryRequest,
  GetRecommendedMoviesRepositoryResponse,
  GetRecommendedMoviesRepositoryResponseResult
}
