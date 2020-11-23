import { GetReviewsTvShowsRepository } from './infrastructure/repository/GetReviewsTvShowsRepository'
import { GetReviewsTvShowsService } from './application/usecase/GetReviewsTvShowsService'
import { GetReviewsTvShowsController } from './userapplication/controller/GetReviewsTvShowsController'
/* eslint-disable camelcase, no-console */
class GetReviewsTvShowsProvider {
  constructor(container) {
    container.service(
      'getReviewsTvShowsRepository',
      (container) =>
        new GetReviewsTvShowsRepository({ ...container.configuration })
    )
    container.service(
      'getReviewsTvShowsService',
      (container) =>
        new GetReviewsTvShowsService({
          getReviewsTvShowsRepository: container.getReviewsTvShowsRepository
        })
    )
    container.service(
      'getReviewsTvShowsController',
      (container) =>
        new GetReviewsTvShowsController({
          getReviewsTvShowsService: container.getReviewsTvShowsService
        })
    )
  }
}

export default GetReviewsTvShowsProvider
