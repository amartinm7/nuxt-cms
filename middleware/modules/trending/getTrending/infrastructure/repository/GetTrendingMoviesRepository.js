import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
import { TIME_WINDOWS_TYPES } from '../../adomain/TrendingTypes'
const _isEmpty = require('lodash.isempty')

/* eslint-disable camelcase, no-console */
class GetTrendingMoviesRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get the daily or weekly trending items.
   * The daily trending list tracks items over the period of a day while items
   * have a 24 hour half life. The weekly list tracks items over a 7 day period,
   * with a 7 day half life.
   * @param getTrendingMoviesRepositoryRequest
   * @returns {*}
   */
  execute(getTrendingMoviesRepositoryRequest) {
    const {
      mediaType,
      timeWindow,
      language
    } = getTrendingMoviesRepositoryRequest
    const urlPath = `/trending/${mediaType}/${timeWindow}?language=${language}`
    const axiosRequest = new GetAxiosRequest({
      accessToken: this._accessToken,
      baseURL: 'https://api.themoviedb.org/3'
    }).getRequest(urlPath)
    return this._axios(axiosRequest)
  }

  async executeAsync(getTrendingMoviesRepositoryRequest) {
    const axiosResponse = await this.execute(getTrendingMoviesRepositoryRequest)
    return new GetTrendingMoviesRepositoryResponse({
      ...axiosResponse.data
    })
  }
}

class GetTrendingMoviesRepositoryRequest {
  constructor({ mediaType, timeWindow = TIME_WINDOWS_TYPES.WEEK, language }) {
    this.mediaType = mediaType
    this.timeWindow = timeWindow
    this.language = language
  }
}

/* eslint-disable camelcase */
class GetTrendingMoviesRepositoryResponse {
  constructor({ page, total_pages, total_results, results }) {
    this._page = page
    this._total_pages = total_pages
    this._total_results = total_results
    this._results = results.map((it) => {
      // eslint-disable-next-line no-new
      return new GetTrendingMoviesRepositoryResponseResult({
        ...it
      })
    })
  }
}

class GetTrendingMoviesRepositoryResponseResult {
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
    popularity,
    media_type,
    original_language,
    origin_country
  }) {
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
    this._media_type = media_type
    this._original_language = original_language
    this._origin_country = origin_country
    this._origin_countryToString = this.getOriginalCountryToString()
    this._media_type = media_type
  }

  getOriginalCountryToString() {
    return _isEmpty(this._origin_country) ? '' : this._origin_country.join(', ')
  }
}

export {
  GetTrendingMoviesRepository,
  GetTrendingMoviesRepositoryRequest,
  GetTrendingMoviesRepositoryResponse,
  GetTrendingMoviesRepositoryResponseResult
}
