import { GetMultiSearchByTitleServiceRequest } from '../../application/usecase/GetMultiSearchByTitleService'
/* eslint-disable camelcase, no-console */
class GetMultiSearchByTitleController {
  constructor({ getMultiSearchByTitleService }) {
    this._getMultiSearchByTitleService = getMultiSearchByTitleService
  }

  async execute(getMultiSearchByTitleControllerRequest) {
    const getMultiSearchByTitleServiceResponse = await this._getMultiSearchByTitleService.execute(
      new GetMultiSearchByTitleServiceRequest({
        ...getMultiSearchByTitleControllerRequest
      })
    )
    return getMultiSearchByTitleServiceResponse
  }
}

/* eslint-disable camelcase */
class GetMultiSearchByTitleControllerRequest {
  constructor({ query, language }) {
    this.query = query
    this.language = language
  }
}

export {
  GetMultiSearchByTitleController,
  GetMultiSearchByTitleControllerRequest
}
