import GetAxiosRequest from '../../../modules/axios/GetAxiosRequest'

class GetGenreTvShowListRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get the list of official genres for TV shows.
   * @returns {*}
   */
  execute() {
    const urlPath = `/genre/tv/list`
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync() {
    const axiosResponse = await this.execute()
    return new GetGenreTvShowListRepositoryResponse({ ...axiosResponse.data })
  }
}

/* eslint-disable camelcase */
class GetGenreTvShowListRepositoryResponse {
  constructor({ genres }) {
    this._genres = genres.map((it) => {
      // eslint-disable-next-line no-new
      return new GetGenreTvShowListRepositoryResponseResult(it)
    })
  }
}

class GetGenreTvShowListRepositoryResponseResult {
  constructor({ id, name }) {
    this._id = id
    this._name = name
  }
}

export { GetGenreTvShowListRepository, GetGenreTvShowListRepositoryResponse }
