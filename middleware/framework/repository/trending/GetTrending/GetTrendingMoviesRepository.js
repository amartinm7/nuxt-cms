class GetTrendingMoviesRepository {
  constructor({ axios, apiToken }) {
    this._axios = axios
    this._apiToken = apiToken
  }

  execute(getTrendingMoviesRepositoryRequest) {
    const vm = this
    console.log('>>>GetTrendingMoviesRepository.execute')
    // eslint-disable-next-line no-unused-vars
    const { _mediaType, _timeWindow } = getTrendingMoviesRepositoryRequest
    const headers = {
      'Content-Type': 'application/json;charset=utf-8',
      Accept: '*/*',
      'Cache-Control': 'no-cache',
      Authorization: `Bearer ${vm._apiToken}`
    }
    const url = `https://api.themoviedb.org/3/trending/${_mediaType}/${_timeWindow}`
    const axiosRequest = {
      method: 'get',
      url,
      headers
    }
    return this._axios(axiosRequest)
  }

  async executeAsync(getLatestFilmsRepositoryRequest) {
    const axiosRsponse = await this.execute(getLatestFilmsRepositoryRequest)
    return new GetTrendingMoviesRepositoryResponse({ ...axiosRsponse.data })
  }
}

class GetTrendingMoviesRepositoryRequest {
  constructor({ mediaType, timeWindow }) {
    this._mediaType = mediaType
    this._timeWindow = timeWindow
  }
}

/* eslint-disable camelcase */
class GetTrendingMoviesRepositoryResponse {
  // eslint-disable-next-line no-useless-constructor
  constructor(data) {
    this._data = data
  }
}

export {
  GetTrendingMoviesRepository,
  GetTrendingMoviesRepositoryRequest,
  GetTrendingMoviesRepositoryResponse
}
