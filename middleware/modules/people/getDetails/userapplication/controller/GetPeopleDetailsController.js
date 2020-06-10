import { GetPeopleDetailsServiceRequest } from '../../application/usecase/GetPeopleDetailsService'
/* eslint-disable camelcase, no-console */
class GetPeopleDetailsController {
  constructor({ getPeopleDetailsService }) {
    this._getPeopleDetailsService = getPeopleDetailsService
  }

  async execute(getPeopleDetailsControllerRequest) {
    const getPeopleDetailsServiceResponse = await this._getPeopleDetailsService.execute(
      new GetPeopleDetailsServiceRequest({
        ...getPeopleDetailsControllerRequest
      })
    )
    return getPeopleDetailsServiceResponse
  }
}

/* eslint-disable camelcase */
class GetPeopleDetailsControllerRequest {
  constructor({ person_id, language }) {
    this.person_id = person_id
    this.language = language
  }
}

export { GetPeopleDetailsController, GetPeopleDetailsControllerRequest }
