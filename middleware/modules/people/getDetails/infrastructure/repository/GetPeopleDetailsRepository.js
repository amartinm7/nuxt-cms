import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
import MediaTypes from '../../../../../../middleware/modules/domain/MediaTypes'
import GenderTypes from '@/middleware/modules/domain/GenderTypes'

/* eslint-disable camelcase, no-console */
class GetPeopleDetailsRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get getPeopleDetails
   * @param getPeopleDetailsRepositoryRequest
   * @returns {*}
   */
  execute(getPeopleDetailsRepositoryRequest) {
    const { person_id, language } = { ...getPeopleDetailsRepositoryRequest }
    const urlPath = `/person/${person_id}?language=${language}&append_to_response=images,movie_credits,tv_credits`
    console.log(urlPath)
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(getPeopleDetailsRepositoryRequest) {
    const axiosResponse = await this.execute(getPeopleDetailsRepositoryRequest)
    return new GetPeopleDetailsRepositoryResponse({ ...axiosResponse.data })
  }
}

class GetPeopleDetailsRepositoryRequest {
  constructor({ person_id, language }) {
    this.person_id = person_id
    this.language = language
  }
}

/* eslint-disable camelcase */
class GetPeopleDetailsRepositoryResponse {
  constructor({
    id,
    birthday,
    known_for_department,
    deathday,
    name,
    gender,
    biography,
    popularity,
    place_of_birth,
    profile_path,
    homepage,
    images,
    movie_credits,
    tv_credits,
    imdb_id
  }) {
    this._id = id
    this._birthday = birthday
    this._known_for_department = known_for_department
    this._deathday = deathday
    this._name = name
    this._gender = gender ? GenderTypes[gender] : GenderTypes['1']
    this._biography = biography
    this._popularity = popularity
    this._place_of_birth = place_of_birth
    this._profile_path = profile_path
    this._homepage = homepage
    this._imdb_id = imdb_id
    this._images = images.profiles.map((img) => {
      return new GetBackDropsPostersDetailsResponse(img)
    })
    this._movie_credits = {
      _cast: movie_credits?.cast?.map((cst) => {
        return new GetCreditCastsPeopleResponse({
          ...cst,
          mediaType: MediaTypes.movie
        })
      }),
      _crew: movie_credits?.crew?.map((crw) => {
        return new GetCreditCastsPeopleResponse({
          ...crw,
          mediaType: MediaTypes.movie
        })
      })
    }
    this._tv_credits = {
      _cast: tv_credits?.cast?.map((cst) => {
        return new GetCreditCastsPeopleResponse({
          ...cst,
          mediaType: MediaTypes.tv
        })
      }),
      _crew: tv_credits?.crew?.map((crw) => {
        return new GetCreditCastsPeopleResponse((crw) => {
          return new GetCreditCastsPeopleResponse({
            ...crw,
            mediaType: MediaTypes.tv
          })
        })
      })
    }
  }
}

/* eslint-disable camelcase */
// eslint-disable-next-line no-unused-vars
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

/* eslint-disable camelcase */
// eslint-disable-next-line no-unused-vars
class GetCreditCastsPeopleResponse {
  constructor({
    poster_path,
    adult,
    backdrop_path,
    vote_count,
    video,
    id,
    popularity,
    genre_ids = [],
    original_language,
    title,
    original_title,
    release_date,
    character,
    vote_average,
    overview,
    credit_id,
    mediaType
  }) {
    this._poster_path = poster_path
    this._adult = adult
    this._backdrop_path = backdrop_path
    this._vote_count = vote_count
    this._video = video
    this._id = id
    this._popularity = popularity
    this._genre_ids = genre_ids
    this._original_language = original_language
    this._title = title
    this._original_title = original_title
    this._release_date = release_date
    this._character = character
    this._vote_average = vote_average
    this._overview = overview
    this._credit_id = credit_id
    this._media_type = mediaType
  }
}

export {
  GetPeopleDetailsRepository,
  GetPeopleDetailsRepositoryRequest,
  GetPeopleDetailsRepositoryResponse
}
