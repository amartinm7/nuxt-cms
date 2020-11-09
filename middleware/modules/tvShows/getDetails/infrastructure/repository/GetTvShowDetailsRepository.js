import GetAxiosRequest from '@/middleware/framework/modules/axios/GetAxiosRequest'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import GetCreditCrewResponse from '@/middleware/modules/domain/responses/GetCreditCrewResponse'
import GetCreditCastsResponse from '@/middleware/modules/domain/responses/GetCreditCastsResponse'
import GetImageDetailsResponse from '@/middleware/modules/domain/responses/GetImageDetailsResponse'
import GetVideoDetailsResponse from '@/middleware/modules/domain/responses/GetVideoDetailsResponse'
const _isEmpty = require('lodash.isempty')
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
  constructor({
    id,
    episode_count,
    name,
    overview,
    air_date,
    poster_path,
    season_number
  }) {
    this._id = id
    this._episode_count = episode_count
    this._name = name
    this._overview = overview
    this._air_date = air_date
    this._poster_path = poster_path
    this._season_number = season_number
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
    production_companies,
    created_by
  }) {
    this._error = error
    this._media_type = MediaTypes.tv
    this._genres = genres
    this._id = id
    this._imdb_id = ''
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
    this._release_date = first_air_date
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
    if (!_isEmpty(credits) && !_isEmpty(created_by)) {
      this._created_by = created_by.map((it) => {
        // eslint-disable-next-line no-new
        return new GetCreditCrewResponse({ ...it })
      })
    }
    if (!_isEmpty(credits) && !_isEmpty(credits.crew)) {
      this._crews = credits.crew.map((it) => {
        // eslint-disable-next-line no-new
        return new GetCreditCrewResponse({ ...it })
      })
      this._crew = {
        _director: this._crews.filter((it) => it._job === 'Director'),
        _screenplay: this._crews.filter(
          (it) => it._job === 'Screenplay' || it._job === 'Novel'
        ),
        _producer: this._crews.filter(
          (it) => it._job === 'Producer' || it._job === 'Executive Producer'
        )
      }
    }
    this._director = this._crewDirector()
    this._screenplay = this._crewScreenplay()
    this._producer = this._crewProducer()
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
      console.log('networks' + JSON.stringify(this._networks))
    }
    if (!_isEmpty(production_companies)) {
      this._production_companies = production_companies.map((it) => {
        // eslint-disable-next-line no-new
        return new GetProductionCompaniesResponse({ ...it })
      })
    }
    this._origin_country = origin_country.map((countryCode) => {
      return { _iso_3166_1: countryCode }
    })
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
