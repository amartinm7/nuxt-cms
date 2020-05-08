import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
/* eslint-disable camelcase, no-console */
class GetTvShowsVideosRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * https://developers.themoviedb.org/3/tv/get-tv-videos
   * Get the videos that have been added to a TV show.
   * @param getTvVideosRepositoryRequest
   * @returns {*}
   */
  execute(getTvShowsVideosRepositoryRequest) {
    const { movie_id, isoLangCode } = getTvShowsVideosRepositoryRequest
    const urlPath = `/tv/${movie_id}}/videos?language=${isoLangCode}`
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(getTvShowsVideosRepositoryRequest) {
    const axiosResponse = await this.execute(getTvShowsVideosRepositoryRequest)
    return new GetTvShowsVideosRepositoryResponse({ ...axiosResponse.data })
  }
}

/* eslint-disable camelcase */
class GetTvShowsVideosRepositoryRequest {
  constructor({ movie_id, isoLangCode = 'es' }) {
    this.movie_id = movie_id
    this.isoLangCode = isoLangCode
  }
}

/* eslint-disable camelcase */
class GetTvShowsVideosRepositoryResponse {
  constructor({ id, results }) {
    this._page = id
    this._results = results.map((it) => {
      // eslint-disable-next-line no-new
      return new GetTvShowsVideosRepositoryResponseResult(it)
    })
  }
}

class GetTvShowsVideosRepositoryResponseResult {
  constructor({ id, key, name, site, size, type }) {
    this._id = id
    this._key = key
    this._name = name
    this._site = site
    this._size = size
    this._type = type
  }
}

export {
  GetTvShowsVideosRepository,
  GetTvShowsVideosRepositoryRequest,
  GetTvShowsVideosRepositoryResponse
}
