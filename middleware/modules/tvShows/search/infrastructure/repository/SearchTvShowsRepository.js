import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
import MediaTypes from '../../../../domain/MediaTypes'
/* eslint-disable camelcase, no-console */
class SearchTvShowsRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get search
   * @param searchTvShowsRepositoryRequest
   * @returns {*}
   */
  execute(searchTvShowsRepositoryRequest) {
    const { query, language } = { ...searchTvShowsRepositoryRequest }
    const urlPath = `/search/tv/?language=${language}&query=${query}&append_to_response=videos,images,credits`
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(searchTvShowsRepositoryRequest) {
    const axiosResponse = await this.execute(searchTvShowsRepositoryRequest)
    return new SearchTvShowsRepositoryResponse({ ...axiosResponse.data })
  }
}

class SearchTvShowsRepositoryRequest {
  constructor({ query, language }) {
    this.query = query
    this.language = language
  }
}

/* eslint-disable camelcase */
class SearchTvShowsRepositoryResponse {
  constructor({ page, total_pages, total_results, results }) {
    this._page = page
    this._total_pages = total_pages
    this._total_results = total_results
    this._results = results.map((it) => {
      // eslint-disable-next-line no-new
      return new SearchTvShowsRepositoryResponseResult(it)
    })
  }
}

class SearchTvShowsRepositoryResponseResult {
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
    this._media_type = MediaTypes.tv
  }
}

export {
  SearchTvShowsRepository,
  SearchTvShowsRepositoryRequest,
  SearchTvShowsRepositoryResponse,
  SearchTvShowsRepositoryResponseResult
}
