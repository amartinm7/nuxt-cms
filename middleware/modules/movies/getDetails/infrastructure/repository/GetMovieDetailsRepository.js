import GetAxiosRequest from '@/middleware/framework/modules/axios/GetAxiosRequest'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import GetImageDetailsResponse from '@/middleware/modules/domain/responses/GetImageDetailsResponse'
import GetCreditCastsResponse from '@/middleware/modules/domain/responses/GetCreditCastsResponse'
import GetCreditCrewResponse from '@/middleware/modules/domain/responses/GetCreditCrewResponse'
import GetProductionCountryResponse from '@/middleware/modules/domain/responses/GetProductionCountryResponse'
import GetVideoDetailsResponse from '@/middleware/modules/domain/responses/GetVideoDetailsResponse'
const _isEmpty = require('lodash.isempty')
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
    const urlPath = `/movie/${movie_id}?language=${language}&append_to_response=videos,images,credits`
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
    homepage,
    tagline,
    budget,
    revenue,
    production_countries
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
    if (!_isEmpty(videos) && !_isEmpty(videos.results)) {
      this._videos = videos.results.map((it) => {
        // eslint-disable-next-line no-new
        return new GetVideoDetailsResponse(it)
      })
    }
    if (!_isEmpty(images)) {
      this._images = new GetImageDetailsResponse(images)
    }
    if (!_isEmpty(credits) && !_isEmpty(credits.cast)) {
      this._credits = credits.cast.map((it) => {
        // eslint-disable-next-line no-new
        return new GetCreditCastsResponse({ ...it })
      })
    }
    if (!_isEmpty(credits) && !_isEmpty(credits.crew)) {
      this._crews = credits.crew.map((it) => {
        // eslint-disable-next-line no-new
        return new GetCreditCrewResponse({ ...it })
      })
      this._crew = {
        _director: this._crews.filter((it) => it._job === 'Director'),
        _screenplay: this._crews.filter((it) => it._job === 'Screenplay'),
        _producer: this._crews.filter((it) => it._job === 'Producer')
      }
    }
    this._runtimeByHours = this._getRuntimeByHours()
    if (!_isEmpty(production_countries) && !_isEmpty(production_countries)) {
      this._production_countries = production_countries.map((it) => {
        // eslint-disable-next-line no-new
        return new GetProductionCountryResponse({ ...it })
      })
    }
    this._director = this._crewDirector()
    this._screenplay = this._crewScreenplay()
    this._producer = this._crewProducer()
  }

  _getRuntimeByHours() {
    const time = this._runtime ?? 0
    const hours = Math.floor(time / 60)
    const minutes = time % 60
    return `${hours}h ${minutes}min`
  }

  _crewDirector() {
    return this._crew?._director ?? ''
  }

  _crewScreenplay() {
    return this._crew?._screenplay ?? ''
  }

  _crewProducer() {
    return this._crew?._producer ?? ''
  }
}

export {
  GetMovieDetailsRepository,
  GetMovieDetailsRepositoryRequest,
  GetMovieDetailsRepositoryResponse
}
