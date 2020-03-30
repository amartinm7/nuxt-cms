import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'

class GetLatestMoviesRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get the most newly created movie. This is a live response and will continuously change.
   * @param getLatestFilmsRepositoryRequest
   * @returns {*}
   */
  execute(getLatestFilmsRepositoryRequest) {
    const urlPath = `/movie/latest`
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(getLatestFilmsRepositoryRequest) {
    const axiosResponse = await this.execute(getLatestFilmsRepositoryRequest)
    return new GetLatestMoviesRepositoryResponse({ ...axiosResponse.data })
  }
}

class GetLatestMoviesRepositoryRequest {
  // eslint-disable-next-line no-useless-constructor
  constructor() {}
}

/* eslint-disable camelcase */
class GetLatestMoviesRepositoryResponse {
  constructor({
    adult,
    genres,
    id,
    imdb_id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    runtime,
    status,
    title
  }) {
    this._adult = adult
    this._genres = genres
    this._id = id
    this._imdb_id = imdb_id
    this._original_language = original_language
    this._original_title = original_title
    this._overview = overview
    this._popularity = popularity
    this._poster_path = poster_path
    this._release_date = release_date
    this._runtime = runtime
    this._status = status
    this._title = title
  }
}

export {
  GetLatestMoviesRepository,
  GetLatestMoviesRepositoryRequest,
  GetLatestMoviesRepositoryResponse
}
