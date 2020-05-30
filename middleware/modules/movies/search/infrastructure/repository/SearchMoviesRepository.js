import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
/* eslint-disable camelcase, no-console */
class SearchMoviesRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get search
   * @param searchMoviesRepositoryRequest
   * @returns {*}
   */
  execute(searchMoviesRepositoryRequest) {
    const { query, language } = { ...searchMoviesRepositoryRequest }
    const urlPath = `/search/movie?language=${language}&query=${query}&append_to_response=videos,images,credits`
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(searchMoviesRepositoryRequest) {
    const axiosResponse = await this.execute(searchMoviesRepositoryRequest)
    return new SearchMoviesRepositoryResponse({ ...axiosResponse.data })
  }
}

class SearchMoviesRepositoryRequest {
  constructor({ query, language }) {
    this.query = query
    this.language = language
  }
}

/* eslint-disable camelcase */
class SearchMoviesRepositoryResponse {
  constructor({ page, total_pages, total_results, results }) {
    this._page = page
    this._total_pages = total_pages
    this._total_results = total_results
    this._results = results.map((it) => {
      // eslint-disable-next-line no-new
      return new SearchMoviesRepositoryResponseResult(it)
    })
  }
}

class SearchMoviesRepositoryResponseResult {
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
  SearchMoviesRepository,
  SearchMoviesRepositoryRequest,
  SearchMoviesRepositoryResponse,
  SearchMoviesRepositoryResponseResult
}