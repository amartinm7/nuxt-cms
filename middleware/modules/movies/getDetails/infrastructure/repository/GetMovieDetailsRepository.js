import GetAxiosRequest from '@/middleware/framework/modules/axios/GetAxiosRequest'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import GetRuntimeHoursResponse from '@/middleware/modules/domain/responses/GetRuntimeHoursResponse'
import GetVideosDetailsTransformer from '@/middleware/modules/domain/responses/GetVideoDetailsResponse'
import GetImageDetailsTransformer from '@/middleware/modules/domain/responses/GetImageDetailsResponse'
import GetCreditCastsTransformer from '@/middleware/modules/domain/responses/GetCreditCastsResponse'
import GetCreditCrewTransformer from '@/middleware/modules/domain/responses/GetCreditCrewResponse'
import GetKeywordsTransformer from '@/middleware/modules/domain/responses/GetKeywordsResponse'
import { GetProductionCountryMoviesTransformer } from '@/middleware/modules/domain/responses/GetProductionCountryResponse'
import GetReviewsTransformer from '@/middleware/modules/domain/responses/GetReviewsResponse'
/* eslint-disable camelcase, no-console */
class GetMovieDetailsRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get the most newly created movie. This is a live response and will continuously change.
   * @param getLatestFilmsRepositoryRequest
   * @returns {*}
   */
  execute(getMovieDetailsRepositoryRequest) {
    const { movie_id, language } = { ...getMovieDetailsRepositoryRequest }
    const urlPath = `/movie/${movie_id}?language=${language}&append_to_response=videos,images,credits,keywords,reviews`
    console.log(urlPath)
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(getMovieDetailsRepositoryRequest) {
    try {
      const axiosResponse = await this.execute(getMovieDetailsRepositoryRequest)
      return new GetMovieDetailsRepositoryResponse({ ...axiosResponse.data })
    } catch (e) {
      return new GetMovieDetailsRepositoryResponse({ error: e })
    }
  }
}

/* eslint-disable camelcase */
class GetMovieDetailsRepositoryRequest {
  constructor({ movie_id, language = 'es' }) {
    this.movie_id = movie_id
    this.language = language
  }
}

/* eslint-disable camelcase */
class GetMovieDetailsRepositoryResponse {
  constructor({
    error,
    adult,
    genres,
    id,
    imdb_id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    runtime,
    status,
    title,
    vote_average,
    vote_count,
    videos,
    images,
    credits,
    keywords,
    homepage,
    tagline,
    budget,
    revenue,
    production_countries,
    reviews
  }) {
    this._error = error
    this._media_type = MediaTypes.movie
    this._adult = adult
    this._genres = genres
    this._id = id
    this._imdb_id = imdb_id
    this._original_language = original_language
    this._original_title = original_title
    this._overview = overview
    this._popularity = popularity
    this._poster_path = poster_path
    this._release_date = release_date
    this._runtime = runtime
    this._status = status
    this._title = title
    this._vote_average = vote_average
    this._vote_count = vote_count
    this._homepage = homepage
    this._tagline = tagline
    this._budget = budget
    this._revenue = revenue
    this._videos = GetVideosDetailsTransformer.transform(videos)
    this._images = GetImageDetailsTransformer.transform(images)
    this._credits = GetCreditCastsTransformer.transform(credits)
    this._crews = GetCreditCrewTransformer.transform(credits)
    this._crew = GetCreditCrewTransformer.transformByDepartment(this._crews)
    this._director = this._crew._director
    this._screenplay = this._crew._screenplay
    this._producer = this._crew._producer
    this._keywords = GetKeywordsTransformer.transform(keywords)
    this._production_countries = GetProductionCountryMoviesTransformer.transform(
      production_countries
    )
    this._reviews = GetReviewsTransformer.transform(reviews)
  }

  _getRuntimeByHours() {
    return GetRuntimeHoursResponse(this._runtime).getRuntimeByHours()
  }
}

export {
  GetMovieDetailsRepository,
  GetMovieDetailsRepositoryRequest,
  GetMovieDetailsRepositoryResponse
}
