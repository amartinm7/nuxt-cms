import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
const _isEmpty = require('lodash.isempty')

/* eslint-disable camelcase, no-console */
class GetMultiSearchByTitleRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get getMultiSearchByTitle
   * @param getMultiSearchByTitleRepositoryRequest
   * @returns {*}
   */
  execute(getMultiSearchByTitleRepositoryRequest) {
    const { query, language } = { ...getMultiSearchByTitleRepositoryRequest }
    const urlPath = `/search/multi?language=${language}&query=${query}`
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(getMultiSearchByTitleRepositoryRequest) {
    const axiosResponse = await this.execute(
      getMultiSearchByTitleRepositoryRequest
    )
    return new GetMultiSearchByTitleRepositoryResponse({
      ...axiosResponse.data
    })
  }
}

class GetMultiSearchByTitleRepositoryRequest {
  constructor({ query, language }) {
    this.query = query
    this.language = language
  }
}

/* eslint-disable camelcase */
class GetMultiSearchByTitleRepositoryResponse {
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
        return new GetMultiSearchByTitleRepositoryResponseResult(it)
      })
  }
}

class GetMultiSearchByTitleRepositoryResponseResult {
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
    this._media_type = media_type
  }
}

export {
  GetMultiSearchByTitleRepository,
  GetMultiSearchByTitleRepositoryRequest,
  GetMultiSearchByTitleRepositoryResponse,
  GetMultiSearchByTitleRepositoryResponseResult
}
