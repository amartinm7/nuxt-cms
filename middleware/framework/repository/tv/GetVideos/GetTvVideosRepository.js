import GetAxiosRequest from '../../../modules/axios/GetAxiosRequest'

class GetTvVideosRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get the videos that have been added to a TV show.
   * @param getTvVideosRepositoryRequest
   * @returns {*}
   */
  execute(getTvVideosRepositoryRequest) {
    console.log('>>>GetTrendingMoviesRepository.execute')
    const urlPath = `/tv/${getTvVideosRepositoryRequest._id}}/videos`
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(getTvVideosRepositoryRequest) {
    const axiosResponse = await this.execute(getTvVideosRepositoryRequest)
    return new GetTvVideosRepositoryResponse({ ...axiosResponse.data })
  }
}

class GetTvVideosRepositoryRequest {
  constructor({ id }) {
    this._id = id
  }
}

/* eslint-disable camelcase */
class GetTvVideosRepositoryResponse {
  constructor({ page, total_pages, total_results, results }) {
    this._page = page
    this._total_pages = total_pages
    this._total_results = total_results
    this._results = results.map((it) => {
      // eslint-disable-next-line no-new
      return new GetTvVideosRepositoryResponseResult(it)
    })
  }
}

class GetTvVideosRepositoryResponseResult {
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
  GetTvVideosRepository,
  GetTvVideosRepositoryRequest,
  GetTvVideosRepositoryResponse
}
