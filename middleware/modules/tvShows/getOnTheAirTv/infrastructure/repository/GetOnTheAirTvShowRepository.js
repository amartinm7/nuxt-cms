import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
import MediaTypes from '../../../../domain/MediaTypes'
const _isEmpty = require('lodash.isempty')

/* eslint-disable camelcase, no-console */
class GetOnTheAirTvShowRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get getOnTheAirTv
   * @param getOnTheAirTvShowRepositoryRequest
   * @returns {*}
   */
  execute(getOnTheAirTvShowRepositoryRequest) {
    const { page, language } = { ...getOnTheAirTvShowRepositoryRequest }
    const urlPath = `/tv/on_the_air?language=${language}&page=${page}`
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(getOnTheAirTvShowRepositoryRequest) {
    const axiosResponse = await this.execute(getOnTheAirTvShowRepositoryRequest)
    return new GetOnTheAirTvShowRepositoryResponse({ ...axiosResponse.data })
  }
}

class GetOnTheAirTvShowRepositoryRequest {
  constructor({ page = 1, language = 'es' }) {
    this.page = page
    this.language = language
  }
}

/* eslint-disable camelcase */
class GetOnTheAirTvShowRepositoryResponse {
  constructor({ page, total_pages, total_results, results }) {
    this._page = page
    this._total_pages = total_pages
    this._total_results = total_results
    this._results = results
      .filter((it) => {
        return !_isEmpty(it.poster_path)
      })
      .map((it) => {
        return new GetOnTheAirTvShowRepositoryResponseResult(it)
      })
  }
}

class GetOnTheAirTvShowRepositoryResponseResult {
  constructor({
    id,
    title,
    name,
    vote_account,
    vote_average,
    release_date,
    first_air_date,
    overview,
    adult,
    genre_ids,
    poster_path,
    backdrop_path,
    popularity
  }) {
    this._media_type = MediaTypes.tv
    this._id = id
    this._title = title
    this._name = name
    this._vote_account = vote_account
    this._vote_average = vote_average
    this._release_date = release_date
    this._first_air_date = first_air_date
    this._overview = overview
    this._adult = adult
    this._genre_ids = genre_ids
    this._poster_path = poster_path
    this._backdrop_path = backdrop_path
    this._popularity = popularity
  }
}

export {
  GetOnTheAirTvShowRepository,
  GetOnTheAirTvShowRepositoryRequest,
  GetOnTheAirTvShowRepositoryResponse,
  GetOnTheAirTvShowRepositoryResponseResult
}
