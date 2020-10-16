import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
import MediaTypes from '../../../../domain/MediaTypes'
const _isEmpty = require('lodash.isempty')

/* eslint-disable camelcase, no-console */
class FindTvShowsByRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get findBy
   * @param findTvShowsByRepositoryRequest
   * @returns {*}
   */
  execute(findTvShowsByRepositoryRequest) {
    const { genres_ids, language, sortedBy, page } = {
      ...findTvShowsByRepositoryRequest
    }
    // logic to handle default values. Applied to remove rubbish like japanesse anime and something like that
    const originalLanguages = 'es|en'
    // const genreIds = _isEmpty(genres_ids) ? '10759,9648' : genres_ids
    const withoutGenres = genres_ids.includes(16) ? '' : '16'
    const withNetworks = _isEmpty(genres_ids)
      ? '213|49|20580|4343|53|1024|2552|3744|4|443|400|1346|76|84|1016|26|2149'
      : '' // netflix, hbo, prime, showtime, tele5, amazon, apple, atresmedia, bbc one, la1, antena3, la2, E!, TLC, lasexta, cuatro, #0
    // end logic to handle default values.
    const urlPath = `/discover/tv?language=${language}&with_networks=${withNetworks}&without_genres=${withoutGenres}&include_null_first_air_dates=false&first_air_date.gte=2019-01-01&sort_by=${sortedBy}&append_to_response=videos,images,credits&with_original_language=${originalLanguages}&page=${page}`
    console.log('urlPath... ' + urlPath)
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(findTvShowsByRepositoryRequest) {
    const axiosResponse = await this.execute(findTvShowsByRepositoryRequest)
    return new FindTvShowsByRepositoryResponse({ ...axiosResponse.data })
  }
}

class FindTvShowsByRepositoryRequest {
  constructor({
    genres_ids,
    language,
    sortedBy = 'popularity.desc',
    page = 1
  }) {
    this.genres_ids = genres_ids
    this.language = language
    this.sortedBy = sortedBy
    this.page = page
  }
}

/* eslint-disable camelcase */
class FindTvShowsByRepositoryResponse {
  constructor({ page, total_pages, total_results, results }) {
    this._page = page
    this._total_pages = total_pages
    this._total_results = total_results
    this._results = results
      .filter((it) => {
        return !_isEmpty(it.poster_path)
      })
      .map((it) => {
        // eslint-disable-next-line no-new
        return new FindTvShowsByRepositoryResponseResult(it)
      })
  }
}

class FindTvShowsByRepositoryResponseResult {
  constructor({
    id,
    title,
    name,
    vote_account,
    vote_average,
    first_air_date,
    overview,
    adult,
    genre_ids,
    poster_path,
    backdrop_path,
    popularity
  }) {
    this._id = id
    this._title = title
    this._name = name
    this._vote_account = vote_account
    this._vote_average = vote_average
    this._first_air_date = first_air_date
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
  FindTvShowsByRepository,
  FindTvShowsByRepositoryRequest,
  FindTvShowsByRepositoryResponse,
  FindTvShowsByRepositoryResponseResult
}
