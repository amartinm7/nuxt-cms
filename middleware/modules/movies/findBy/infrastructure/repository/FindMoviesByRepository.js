import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
import MediaTypes from '../../../../domain/MediaTypes'
const _isEmpty = require('lodash.isempty')

/* eslint-disable camelcase, no-console */
class FindMoviesByRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get findBy
   * @param findMoviesByRepositoryRequest
   * @returns {*}
   */
  execute(findMoviesByRepositoryRequest) {
    const { genres_ids, language, sortedBy } = {
      ...findMoviesByRepositoryRequest
    }
    const urlPath = `/discover/movie?language=${language}&with_genres=${genres_ids}&sort_by=${sortedBy}&append_to_response=videos,images,credits`
    console.log('urlPath... ' + urlPath)
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(findMoviesByRepositoryRequest) {
    const axiosResponse = await this.execute(findMoviesByRepositoryRequest)
    return new FindMoviesByRepositoryResponse({ ...axiosResponse.data })
  }
}

class FindMoviesByRepositoryRequest {
  constructor({ genres_ids, language, sortedBy = 'popularity.desc' }) {
    this.genres_ids = genres_ids
    this.language = language
    this.sortedBy = sortedBy
  }
}

/* eslint-disable camelcase */
class FindMoviesByRepositoryResponse {
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
        return new FindMoviesByRepositoryResponseResult(it)
      })
  }
}

class FindMoviesByRepositoryResponseResult {
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
    popularity
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
  FindMoviesByRepository,
  FindMoviesByRepositoryRequest,
  FindMoviesByRepositoryResponse,
  FindMoviesByRepositoryResponseResult
}
