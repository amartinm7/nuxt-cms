import { GetSimilarShowsRepository } from './infrastructure/repository/GetSimilarShowsRepository'
import { GetSimilarShowsService } from './application/usecase/GetSimilarShowsService'
import { GetSimilarShowsController } from './userapplication/controller/GetSimilarShowsController'
/* eslint-disable camelcase, no-console */
class GetSimilarShowsProvider {
  constructor(container) {
    container.service(
      'getSimilarShowsRepository',
      (container) =>
        new GetSimilarShowsRepository({ ...container.configuration })
    )
    container.service(
      'getSimilarShowsService',
      (container) =>
        new GetSimilarShowsService({
          getSimilarShowsRepository: container.getSimilarShowsRepository
        })
    )
    container.service(
      'getSimilarShowsController',
      (container) =>
        new GetSimilarShowsController({
          getSimilarShowsService: container.getSimilarShowsService
        })
    )
  }
}

export default GetSimilarShowsProvider
