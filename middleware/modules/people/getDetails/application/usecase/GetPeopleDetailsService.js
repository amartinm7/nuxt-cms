import { GetPeopleDetailsRepositoryRequest } from '../../infrastructure/repository/GetPeopleDetailsRepository'
/* eslint-disable camelcase, no-console */
class GetPeopleDetailsService {
  constructor({ getPeopleDetailsRepository }) {
    this._getPeopleDetailsRepository = getPeopleDetailsRepository
  }

  async execute(getPeopleDetailsServiceRequest) {
    const getPeopleDetailsRepositoryResponse = await this._getPeopleDetailsRepository.executeAsync(
      new GetPeopleDetailsRepositoryRequest({
        ...getPeopleDetailsServiceRequest
      })
    )
    return {
      ...getPeopleDetailsRepositoryResponse
    }
  }
}

class GetPeopleDetailsServiceRequest {
  constructor({ person_id, language }) {
    this.person_id = person_id
    this.language = language
  }
}

export { GetPeopleDetailsService, GetPeopleDetailsServiceRequest }
