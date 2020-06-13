import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
/* eslint-disable camelcase, no-console */
class GetGenresMovieListRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get the list of official genres for movie.
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
    return new GetGenresMovieListRepositoryResponse({ ...axiosResponse.data })
  }
}

/* eslint-disable camelcase */
class GetGenresMovieListRepositoryResponse {
  constructor({ genres }) {
    this._genres = genres.map((it) => {
      // eslint-disable-next-line no-new
      return new GetGenresMovieListRepositoryyResponseResult(it)
    })
  }
}

class GetGenresMovieListRepositoryyResponseResult {
  constructor({ id, name }) {
    this._id = id
    this._name = name
  }
}

export { GetGenresMovieListRepository, GetGenresMovieListRepositoryResponse }
