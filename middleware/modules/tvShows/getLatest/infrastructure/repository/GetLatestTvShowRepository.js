import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
import MediaTypes from '../../../../domain/MediaTypes'
/* eslint-disable camelcase, no-console */
class GetLatestTvShowRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get getLatest tv show
   * @param getLatestTvShowRepositoryRequest
   * @returns {*}
   */
  execute(getLatestTvShowRepositoryRequest) {
    const { language } = { ...getLatestTvShowRepositoryRequest }
    const urlPath = `/tv/latest?language=${language}`
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(getLatestTvShowRepositoryRequest) {
    const axiosResponse = await this.execute(getLatestTvShowRepositoryRequest)
    return new GetLatestTvShowRepositoryResponse({ ...axiosResponse.data })
  }
}

class GetLatestTvShowRepositoryRequest {
  constructor({ language }) {
    this.language = language
  }
}

/* eslint-disable camelcase */
class GetLatestTvShowRepositoryResponse {
  constructor({
    id,
    title,
    name,
    vote_account,
    vote_average,
    release_date,
    first_air_date,
    overview,
    adult,
    genres,
    poster_path,
    backdrop_path,
    popularity,
    homepage,
    networks,
    number_of_episodes,
    number_of_seasons
  }) {
    this._media_type = MediaTypes.tv
    this._id = id
    this._title = title
    this._name = name
    this._vote_account = vote_account
    this._vote_average = vote_average
    this._release_date = release_date
    this._first_air_date = first_air_date
    this._overview = overview
    this._adult = adult
    this._genre_ids = genres.map((item) => item.id)
    this._genres = genres
    this._poster_path = poster_path
    this._backdrop_path = backdrop_path
    this._popularity = popularity
    this._homepage = homepage
    this._networks = networks
    this._number_of_episodes = number_of_episodes
    this._number_of_seasons = number_of_seasons
  }
}

export {
  GetLatestTvShowRepository,
  GetLatestTvShowRepositoryRequest,
  GetLatestTvShowRepositoryResponse
}
