import GetAxiosRequest from '../../../modules/axios/GetAxiosRequest'

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
    console.log('>>>GetTrendingMoviesRepository.execute')
    const { _mediaType, _timeWindow } = getTrendingMoviesRepositoryRequest
    const urlPath = `/trending/${_mediaType}/${_timeWindow}`
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(getLatestFilmsRepositoryRequest) {
    const axiosResponse = await this.execute(getLatestFilmsRepositoryRequest)
    return new GetTrendingMoviesRepositoryResponse(axiosResponse)
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
    genre_ids,
    poster_path,
    backdrop_path,
    popularity,
    media_type
  }) {
    this._id = id
    this._title = title
    this._vote_account = vote_account
    this._vote_average = vote_average
    this._release_date = release_date
    this._overview = overview
    this._adult = adult
    this._genre_ids = genre_ids
    this._poster_path = poster_path
    this._backdrop_path = backdrop_path
    this._popularity = popularity
    this._media_type = media_type
  }
}

export {
  GetTrendingMoviesRepository,
  GetTrendingMoviesRepositoryRequest,
  GetTrendingMoviesRepositoryResponse,
  GetTrendingMoviesRepositoryResponseResult
}
