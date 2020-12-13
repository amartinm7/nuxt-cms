import GetAxiosRequest from '@/middleware/framework/modules/axios/GetAxiosRequest'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import GetVideosDetailsTransformer from '@/middleware/modules/domain/responses/GetVideoDetailsResponse'
import GetImageDetailsTransformer from '@/middleware/modules/domain/responses/GetImageDetailsResponse'
import GetCreditCastsTransformer from '@/middleware/modules/domain/responses/GetCreditCastsResponse'
import GetCreditCrewTransformer from '@/middleware/modules/domain/responses/GetCreditCrewResponse'
import GetSeasonsTransformer from '@/middleware/modules/domain/responses/GetSeasonsResponse'
import GetNetworksTransformer from '@/middleware/modules/domain/responses/GetNetworksResponse'
import GetProductionCompaniesTransformer from '@/middleware/modules/domain/responses/GetProductionCompaniesResponse'
import GetRuntimeHoursResponse from '@/middleware/modules/domain/responses/GetRuntimeHoursResponse'
import GetCreatedByTransformer from '@/middleware/modules/domain/responses/GetCreatedByResponse'
import GetKeywordsTransformer from '@/middleware/modules/domain/responses/GetKeywordsResponse'
import { GetProductionCountryTvShowTransformer } from '@/middleware/modules/domain/responses/GetProductionCountryResponse'
import GetReviewsTransformer from '@/middleware/modules/domain/responses/GetReviewsResponse'
/* eslint-disable camelcase, no-console */
class GetTvShowDetailsRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Gets tv show details
   * @param getTvShowDetailsRepositoryRequest
   * @returns {*}
   */
  execute(getTvShowDetailsRepositoryRequest) {
    const { movie_id, language } = { ...getTvShowDetailsRepositoryRequest }
    const urlPath = `/tv/${movie_id}?language=${language}&append_to_response=images,credits,keywords,reviews,videos`
    console.log(urlPath)
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(getTvShowDetailsRepositoryRequest) {
    try {
      const axiosResponse = await this.execute(
        getTvShowDetailsRepositoryRequest
      )
      return new GetTvShowDetailsRepositoryResponse({ ...axiosResponse.data })
    } catch (e) {
      return new GetTvShowDetailsRepositoryResponse({ error: e })
    }
  }
}

/* eslint-disable camelcase */
class GetTvShowDetailsRepositoryRequest {
  constructor({ movie_id, language = 'es' }) {
    this.movie_id = movie_id
    this.language = language
  }
}

/* eslint-disable camelcase */
class GetTvShowDetailsRepositoryResponse {
  constructor({
    error,
    adult,
    genres,
    id,
    imdb_id,
    original_language,
    origin_country,
    original_name,
    overview,
    popularity,
    poster_path,
    release_date,
    runtime,
    status,
    name,
    vote_average,
    vote_count,
    first_air_date,
    videos,
    images,
    credits,
    number_of_episodes,
    number_of_seasons,
    homepage,
    seasons,
    networks,
    keywords,
    production_companies,
    created_by,
    reviews
  }) {
    this._error = error
    this._adult = adult
    this._runtime = runtime
    this._media_type = MediaTypes.tv
    this._genres = genres
    this._id = id
    this._imdb_id = imdb_id
    this._original_language = original_language
    this._original_name = original_name
    this._overview = overview
    this._popularity = popularity
    this._poster_path = poster_path
    this._status = status
    this._name = name
    this._vote_average = vote_average
    this._vote_count = vote_count
    this._first_air_date = first_air_date
    this._release_date = release_date
    this._videos = GetVideosDetailsTransformer.transform(videos)
    this._images = GetImageDetailsTransformer.transform(images)
    this._credits = GetCreditCastsTransformer.transform(credits)
    this._crews = GetCreditCrewTransformer.transform(credits)
    this._crew = GetCreditCrewTransformer.transformByDepartment(this._crews)
    this._director = this._crew._director
    this._screenplay = this._crew._screenplay
    this._producer = this._crew._producer
    this._created_by = GetCreatedByTransformer.transform(created_by)
    this._number_of_episodes = number_of_episodes
    this._number_of_seasons = number_of_seasons
    this._homepage = homepage
    this._seasons = GetSeasonsTransformer.transform(seasons)
    this._networks = GetNetworksTransformer.transform(networks)
    this._keywords = GetKeywordsTransformer.transform(keywords)
    this._production_companies = GetProductionCompaniesTransformer.transform(
      production_companies
    )
    this._origin_country = GetProductionCountryTvShowTransformer.transform(
      origin_country
    )
    this._reviews = GetReviewsTransformer.transform(reviews)
  }

  _getRuntimeByHours() {
    return GetRuntimeHoursResponse(this._runtime).getRuntimeByHours()
  }
}

export {
  GetTvShowDetailsRepository,
  GetTvShowDetailsRepositoryRequest,
  GetTvShowDetailsRepositoryResponse
}
