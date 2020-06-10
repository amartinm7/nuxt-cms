import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
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
    homepage
  }) {
    this._id = id
    this._birthday = birthday
    this._known_for_department = known_for_department
    this._deathday = deathday
    this._name = name
    this._gender = gender
    this._biography = biography
    this._popularity = popularity
    this._place_of_birth = place_of_birth
    this._profile_path = profile_path
    this._homepage = homepage
  }
}

export {
  GetPeopleDetailsRepository,
  GetPeopleDetailsRepositoryRequest,
  GetPeopleDetailsRepositoryResponse
}
