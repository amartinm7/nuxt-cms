import GetAxiosRequest from '../../../modules/axios/GetAxiosRequest'

class GetGenreMovieListRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get the list of official genres for movies.
   * @returns {*}
   */
  execute() {
    const urlPath = `/genre/movie/list`
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync() {
    const axiosResponse = await this.execute()
    return new GetGenreMovieListRepositoryResponse({ ...axiosResponse.data })
  }
}

/* eslint-disable camelcase */
class GetGenreMovieListRepositoryResponse {
  constructor({ genres }) {
    this._genres = genres.map((it) => {
      // eslint-disable-next-line no-new
      return new GetGenreMovieListRepositoryResponseResult(it)
    })
  }
}

class GetGenreMovieListRepositoryResponseResult {
  constructor({ id, name }) {
    this._id = id
    this._name = name
  }
}

export { GetGenreMovieListRepository, GetGenreMovieListRepositoryResponse }
