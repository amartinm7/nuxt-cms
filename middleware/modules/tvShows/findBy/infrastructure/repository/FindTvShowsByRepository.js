import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
/* eslint-disable camelcase, no-console */
class FindTvShowsByRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get findBy
   * @param findTvShowsByRepositoryRequest
   * @returns {*}
   */
  execute(findTvShowsByRepositoryRequest) {
    const { genres_ids, language } = { ...findTvShowsByRepositoryRequest }
    const urlPath = `/discover/tv?language=${language}&with_genres=${genres_ids}&include_null_first_air_dates=false&first_air_date.gte=2019-01-01&sort_by=popularity.desc&append_to_response=videos,images,credits`
    console.log('urlPath... ' + urlPath)
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(findTvShowsByRepositoryRequest) {
    const axiosResponse = await this.execute(findTvShowsByRepositoryRequest)
    return new FindTvShowsByRepositoryResponse({ ...axiosResponse.data })
  }
}

class FindTvShowsByRepositoryRequest {
  constructor({ genres_ids, language }) {
    this.genres_ids = genres_ids
    this.language = language
  }
}

/* eslint-disable camelcase */
class FindTvShowsByRepositoryResponse {
  constructor({ page, total_pages, total_results, results }) {
    this._page = page
    this._total_pages = total_pages
    this._total_results = total_results
    this._results = results.map((it) => {
      // eslint-disable-next-line no-new
      return new FindTvShowsByRepositoryResponseResult(it)
    })
  }
}

class FindTvShowsByRepositoryResponseResult {
  constructor({
    id,
    title,
    name,
    vote_account,
    vote_average,
    first_air_date,
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
    this._name = name
    this._vote_account = vote_account
    this._vote_average = vote_average
    this._first_air_date = first_air_date
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
  FindTvShowsByRepository,
  FindTvShowsByRepositoryRequest,
  FindTvShowsByRepositoryResponse,
  FindTvShowsByRepositoryResponseResult
}
