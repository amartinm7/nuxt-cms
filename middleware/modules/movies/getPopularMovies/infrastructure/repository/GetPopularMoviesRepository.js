import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
import MediaTypes from '../../../../domain/MediaTypes'
const _isEmpty = require('lodash.isempty')

/* eslint-disable camelcase, no-console */
class GetPopularMoviesRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get getPopularMovies
   * @param getPopularMoviesRepositoryRequest
   * @returns {*}
   */
  execute(getPopularMoviesRepositoryRequest) {
    const { page, language } = { ...getPopularMoviesRepositoryRequest }
    const urlPath = `/movie/popular?language=${language}&page=${page}`
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(getPopularMoviesRepositoryRequest) {
    const axiosResponse = await this.execute(getPopularMoviesRepositoryRequest)
    return new GetPopularMoviesRepositoryResponse({ ...axiosResponse.data })
  }
}

class GetPopularMoviesRepositoryRequest {
  constructor({ page = 1, language = 'es' }) {
    this.page = page
    this.language = language
  }
}

/* eslint-disable camelcase */
class GetPopularMoviesRepositoryResponse {
  constructor({ page, total_pages, total_results, results }) {
    this._page = page
    this._total_pages = total_pages
    this._total_results = total_results
    this._results = results
      .filter((it) => {
        return !_isEmpty(it.poster_path)
      })
      .map((it) => {
        return new GetPopularMoviesRepositoryResponseResult(it)
      })
  }
}

class GetPopularMoviesRepositoryResponseResult {
  constructor({
    id,
    title,
    name,
    vote_account,
    vote_average,
    release_date,
    overview,
    adult,
    genres,
    poster_path,
    backdrop_path,
    popularity
  }) {
    this._media_type = MediaTypes.movie
    this._id = id
    this._title = title
    this._name = name
    this._vote_account = vote_account
    this._vote_average = vote_average
    this._release_date = release_date
    this._overview = overview
    this._adult = adult
    this._genres = genres
    this._poster_path = poster_path
    this._backdrop_path = backdrop_path
    this._popularity = popularity
  }
}

export {
  GetPopularMoviesRepository,
  GetPopularMoviesRepositoryRequest,
  GetPopularMoviesRepositoryResponse,
  GetPopularMoviesRepositoryResponseResult
}
