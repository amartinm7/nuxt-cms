import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
/* eslint-disable camelcase, no-console */
class GetMovieVideosRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get the videos that have been added to a movie.
   * @param getMovieVideosRepositoryRequest
   * @returns {*}
   */
  execute(getMovieVideosRepositoryRequest) {
    const { movie_id, isoLangCode } = getMovieVideosRepositoryRequest
    const urlPath = `/movie/${movie_id}/videos?language=${isoLangCode}`
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(getMovieVideosRepositoryRequest) {
    const axiosResponse = await this.execute(getMovieVideosRepositoryRequest)
    return new GetMovieVideosRepositoryResponse({ ...axiosResponse.data })
  }
}

/* eslint-disable camelcase */
class GetMovieVideosRepositoryRequest {
  constructor({ movie_id, isoLangCode = 'es' }) {
    this.movie_id = movie_id
    this.isoLangCode = isoLangCode
  }
}

/* eslint-disable camelcase */
class GetMovieVideosRepositoryResponse {
  constructor({ id, results }) {
    this._id = id
    this._results = results.map((it) => {
      // eslint-disable-next-line no-new
      return new GetMovieVideosRepositoryResponseResult(it)
    })
  }
}

class GetMovieVideosRepositoryResponseResult {
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
  GetMovieVideosRepository,
  GetMovieVideosRepositoryRequest,
  GetMovieVideosRepositoryResponse
}
