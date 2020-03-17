class GetTrendingMoviesRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get the daily or weekly trending items.
   * The daily trending list tracks items over the period of a day while items
   * have a 24 hour half life. The weekly list tracks items over a 7 day period,
   * with a 7 day half life.
   * @param getTrendingMoviesRepositoryRequest
   * @returns {*}
   */
  execute(getTrendingMoviesRepositoryRequest) {
    const vm = this
    console.log('>>>GetTrendingMoviesRepository.execute')
    // eslint-disable-next-line no-unused-vars
    const { _mediaType, _timeWindow } = getTrendingMoviesRepositoryRequest
    const headers = {
      'Content-Type': 'application/json;charset=utf-8',
      Accept: '*/*',
      'Cache-Control': 'no-cache',
      Authorization: `Bearer ${vm._accessToken}`
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
    const axiosResponse = await this.execute(getLatestFilmsRepositoryRequest)
    return new GetTrendingMoviesRepositoryResponse({ ...axiosResponse.data })
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
  constructor({ page, total_pages, total_results, results }) {
    this._page = page
    this._total_pages = total_pages
    this._total_results = total_results
    this._results = results.map((it) => {
      // eslint-disable-next-line no-new
      return new GetTrendingMoviesRepositoryResponseResult(it)
    })
  }
}

class GetTrendingMoviesRepositoryResponseResult {
  constructor({
    id,
    title,
    vote_account,
    vote_average,
    release_date,
    overview,
    adult,
    poster_path,
    backdrop_path
  }) {
    this._id = id
    this._title = title
    this._vote_account = vote_account
    this._vote_average = vote_average
    this._release_date = release_date
    this._overview = overview
    this._adult = adult
    this._poster_path = poster_path
    this._backdrop_path = backdrop_path
  }
}

export {
  GetTrendingMoviesRepository,
  GetTrendingMoviesRepositoryRequest,
  GetTrendingMoviesRepositoryResponse,
  GetTrendingMoviesRepositoryResponseResult
}
