import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
import MediaTypes from '../../../../domain/MediaTypes'
/* eslint-disable camelcase, no-console */
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
  execute(getLatestMoviesRepositoryRequest) {
    const { language } = { ...getLatestMoviesRepositoryRequest }
    const urlPath = `/movie/latest?language=${language}`
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
    popularity,
    homepage,
    imdb_id
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
    this._genre_ids = genres.map((item) => item.id)
    this._genres = genres
    this._poster_path = poster_path
    this._backdrop_path = backdrop_path
    this._popularity = popularity
    this._media_type = 'movie'
    this._homepage = homepage
    this._imdb_id = imdb_id
  }
}

export {
  GetLatestMoviesRepository,
  GetLatestMoviesRepositoryRequest,
  GetLatestMoviesRepositoryResponse
}
