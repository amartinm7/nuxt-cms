import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
import MediaTypes from '../../../../domain/MediaTypes'
const _isEmpty = require('lodash.isempty')
/* eslint-disable camelcase, no-console */
class GetTvShowDetailsRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Gets tv show details
   * @param getLatestFilmsRepositoryRequest
   * @returns {*}
   */
  execute(getTvShowDetailsRepositoryRequest) {
    const { movie_id, language } = { ...getTvShowDetailsRepositoryRequest }
    const urlPath = `/tv/${movie_id}?language=${language}&append_to_response=videos,images,credits`
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

class GetSeasonsResponse {
  constructor({ id, episode_count, name, overview, air_date }) {
    this._id = id
    this._episode_count = episode_count
    this._name = name
    this._overview = overview
    this._air_date = air_date
  }
}

class GetProductionCompaniesResponse {
  constructor({ id, logo_path, name, origin_country }) {
    this._id = id
    this._logo_path = logo_path
    this._name = name
    this._origin_country = origin_country
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
    production_companies
  }) {
    this._error = error
    this._media_type = MediaTypes.tv
    this._genres = genres
    this._id = id
    this._original_language = original_language
    this._origin_country = origin_country
    this._original_name = original_name
    this._overview = overview
    this._popularity = popularity
    this._poster_path = poster_path
    this._status = status
    this._name = name
    this._vote_average = vote_average
    this._vote_count = vote_count
    this._first_air_date = first_air_date
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
    this._number_of_episodes = number_of_episodes
    this._number_of_seasons = number_of_seasons
    this._homepage = homepage
    if (!_isEmpty(seasons)) {
      this._seasons = seasons.map((it) => {
        // eslint-disable-next-line no-new
        return new GetSeasonsResponse({ ...it })
      })
    }
    if (!_isEmpty(networks)) {
      this._networks = networks.map((it) => {
        // eslint-disable-next-line no-new
        return new GetNetworksResponse({ ...it })
      })
    }
    if (!_isEmpty(production_companies)) {
      this._production_companies = production_companies.map((it) => {
        // eslint-disable-next-line no-new
        return new GetProductionCompaniesResponse({ ...it })
      })
    }
    this._origin_countryToString = this.getOriginalCountryToString()
  }

  getOriginalCountryToString() {
    return _isEmpty(this._origin_country) ? '' : this._origin_country.join(', ')
  }
}

/* eslint-disable camelcase */
class GetVideoDetailsResponse {
  constructor(id, iso_639_1, iso_3166_1, key, name, site, size, type) {
    this._id = id
    this._iso_639_1 = iso_639_1
    this._iso_3166_1 = iso_3166_1
    this._key = key
    this._name = name
    this._site = site
    this._size = size
    this._type = type
  }
}

/* eslint-disable camelcase */
class GetImageDetailsResponse {
  constructor(images) {
    if (!_isEmpty(images) && !_isEmpty(images.backdrops)) {
      this._backdrops = images.backdrops.map((it) => {
        return new GetBackDropsPostersDetailsResponse(it)
      })
    }
    if (!_isEmpty(images) && !_isEmpty(images.posters)) {
      this._posters = images.posters.map((it) => {
        return new GetBackDropsPostersDetailsResponse(it)
      })
    }
  }
}

/* eslint-disable camelcase */
class GetCreditCastsResponse {
  constructor({
    cast_id,
    character,
    credit_id,
    gender,
    id,
    name,
    order,
    profile_path
  }) {
    this.cast_id = cast_id
    this.character = character
    this.credit_id = credit_id
    this.gender = gender
    this.id = id
    this.name = name
    this.order = order
    this.profile_path = profile_path
  }
}

/* eslint-disable camelcase */
class GetBackDropsPostersDetailsResponse {
  constructor({
    aspect_ratio,
    file_path,
    height,
    iso_639_1,
    vote_average,
    vote_count,
    width
  }) {
    this._aspect_ratio = aspect_ratio
    this._file_path = file_path
    this._height = height
    this._iso_639_1 = iso_639_1
    this._vote_average = vote_average
    this._vote_count = vote_count
    this._width = width
  }
}

class GetNetworksResponse {
  constructor({ name, id, logo_path, origin_country }) {
    this._name = name
    this._id = id
    this._logo_path = logo_path
    this._origin_country = origin_country
  }
}

export {
  GetTvShowDetailsRepository,
  GetTvShowDetailsRepositoryRequest,
  GetTvShowDetailsRepositoryResponse
}
