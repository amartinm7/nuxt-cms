import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import GetNetworksTransformer from '@/middleware/modules/domain/responses/GetNetworksResponse'
import { GetProductionCountryTvShowTransformer } from '@/middleware/modules/domain/responses/GetProductionCountryResponse'
/* eslint-disable camelcase, no-console */
class GetRecommendedTvShowsRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get getRecommendedTvShows
   * @param getRecommendedTvShowsRepositoryRequest
   * @returns {*}
   */
  execute(getRecommendedTvShowsRepositoryRequest) {
    const { movie_id, language, page } = {
      ...getRecommendedTvShowsRepositoryRequest
    }
    const urlPath = `/tv/${movie_id}/recommendations?language=${language}&page=${page}`
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(getRecommendedTvShowsRepositoryRequest) {
    const axiosResponse = await this.execute(
      getRecommendedTvShowsRepositoryRequest
    )
    return new GetRecommendedTvShowsRepositoryResponse({
      ...axiosResponse.data
    })
  }
}

class GetRecommendedTvShowsRepositoryRequest {
  constructor({ movie_id, language, page }) {
    this.movie_id = movie_id
    this.language = language
    this.page = page
  }
}

/* eslint-disable camelcase */
class GetRecommendedTvShowsRepositoryResponse {
  constructor({ page, total_pages, total_results, results }) {
    this._page = page
    this._total_pages = total_pages
    this._total_results = total_results
    this._results = results.map((it) => {
      // eslint-disable-next-line no-new
      return new GetRecommendedTvShowsRepositoryResponseResult(it)
    })
  }
}

/*
    "origin_country": [
      "US"
    ],
 */

class GetRecommendedTvShowsRepositoryResponseResult {
  constructor({
    id,
    name,
    vote_account,
    vote_average,
    release_date,
    overview,
    adult,
    genre_ids,
    poster_path,
    backdrop_path,
    popularity,
    origin_country,
    first_air_date,
    original_language,
    original_name,
    networks
  }) {
    this._id = id
    this._title = name
    this._name = name
    this._vote_account = vote_account
    this._vote_average = vote_average
    this._release_date = release_date
    this._overview = overview
    this._adult = adult
    this._genre_ids = genre_ids
    this._poster_path = poster_path
    this._backdrop_path = backdrop_path
    this._popularity = popularity
    this._origin_country = GetProductionCountryTvShowTransformer.transform(
      origin_country
    )
    this._first_air_date = first_air_date
    this._original_language = original_language
    this._original_name = original_name
    this._media_type = MediaTypes.tv
    this._networks = GetNetworksTransformer.transform(networks)
  }
}

export {
  GetRecommendedTvShowsRepository,
  GetRecommendedTvShowsRepositoryRequest,
  GetRecommendedTvShowsRepositoryResponse,
  GetRecommendedTvShowsRepositoryResponseResult
}
