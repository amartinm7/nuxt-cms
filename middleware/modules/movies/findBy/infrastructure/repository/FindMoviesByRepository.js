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
    const { genreId, language, sortedBy, page } = {
      ...findMoviesByRepositoryRequest
    }
    console.log('findMoviesByRepositoryRequest...')
    const originalLanguages = 'es|en'
    const withSortedBy = sortedBy ?? 'popularity.desc'
    const withGenres = genreId ?? ''
    const withoutGenres = ''
    const year = 2020
    const urlPath = `/discover/movie?language=${language}&with_genres=${withGenres}&without_genres=${withoutGenres}&sort_by=${withSortedBy}&append_to_response=images,credits,keywords,reviews,videos&with_original_language=${originalLanguages}&include_video=true&primary_release_year=${year}&page=${page}`
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
  constructor({ genreId, language, sortedBy = 'popularity.desc', page = 1 }) {
    this.genreId = genreId
    this.language = language
    this.sortedBy = sortedBy
    this.page = page
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
