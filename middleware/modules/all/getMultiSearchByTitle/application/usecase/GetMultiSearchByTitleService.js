import { GetMultiSearchByTitleRepositoryRequest } from '../../infrastructure/repository/GetMultiSearchByTitleRepository'
/* eslint-disable camelcase, no-console */
class GetMultiSearchByTitleService {
  constructor({ getMultiSearchByTitleRepository }) {
    this._getMultiSearchByTitleRepository = getMultiSearchByTitleRepository
  }

  async execute(getMultiSearchByTitleServiceRequest) {
    const getMultiSearchByTitleRepositoryResponse = await this._getMultiSearchByTitleRepository.executeAsync(
      new GetMultiSearchByTitleRepositoryRequest({
        ...getMultiSearchByTitleServiceRequest
      })
    )
    return {
      ...getMultiSearchByTitleRepositoryResponse
    }
  }
}

class GetMultiSearchByTitleServiceRequest {
  constructor({ query, language }) {
    this.query = query
    this.language = language
  }
}

export { GetMultiSearchByTitleService, GetMultiSearchByTitleServiceRequest }
