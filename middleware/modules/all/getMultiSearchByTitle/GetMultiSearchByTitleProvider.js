import { GetMultiSearchByTitleRepository } from './infrastructure/repository/GetMultiSearchByTitleRepository'
import { GetMultiSearchByTitleService } from './application/usecase/GetMultiSearchByTitleService'
import { GetMultiSearchByTitleController } from './userapplication/controller/GetMultiSearchByTitleController'
/* eslint-disable camelcase, no-console */
class GetMultiSearchByTitleProvider {
  constructor(container) {
    container.service(
      'getMultiSearchByTitleRepository',
      (container) =>
        new GetMultiSearchByTitleRepository({ ...container.configuration })
    )
    container.service(
      'getMultiSearchByTitleService',
      (container) =>
        new GetMultiSearchByTitleService({
          getMultiSearchByTitleRepository:
            container.getMultiSearchByTitleRepository
        })
    )
    container.service(
      'getMultiSearchByTitleController',
      (container) =>
        new GetMultiSearchByTitleController({
          getMultiSearchByTitleService: container.getMultiSearchByTitleService
        })
    )
  }
}

export default GetMultiSearchByTitleProvider
