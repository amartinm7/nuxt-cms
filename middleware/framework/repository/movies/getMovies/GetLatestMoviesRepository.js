class GetLatestMoviesRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  execute(getLatestFilmsRepositoryRequest) {
    const vm = this
    console.log('>>>GetFilmsRepository.execute')
    const headers = {
      'Content-Type': 'application/json;charset=utf-8',
      Accept: '*/*',
      'Cache-Control': 'no-cache',
      Authorization: `Bearer ${vm._accessToken}`
    }
    const url = `https://api.themoviedb.org/3/movie/latest`
    const axiosRequest = {
      method: 'get',
      url,
      headers
    }
    return this._axios(axiosRequest)
  }

  async executeAsync(getLatestFilmsRepositoryRequest) {
    const axiosRsponse = await this.execute(getLatestFilmsRepositoryRequest)
    return new GetLatestFilmsRepositoryResponse({ ...axiosRsponse.data })
  }
}

class GetLatestMoviesRepositoryRequest {
  // eslint-disable-next-line no-useless-constructor
  constructor() {}
}

/* eslint-disable camelcase */
class GetLatestFilmsRepositoryResponse {
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
  GetLatestFilmsRepositoryResponse
}
