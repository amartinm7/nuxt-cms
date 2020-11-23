import { GetRecommendedTvShowsRepository } from './infrastructure/repository/GetRecommendedTvShowsRepository'
import { GetRecommendedTvShowsService } from './application/usecase/GetRecommendedTvShowsService'
import { GetRecommendedTvShowsController } from './userapplication/controller/GetRecommendedTvShowsController'
/* eslint-disable camelcase, no-console */
class GetRecommendedTvShowsProvider {
  constructor(container) {
    container.service(
      'getRecommendedTvShowsRepository',
      (container) =>
        new GetRecommendedTvShowsRepository({ ...container.configuration })
    )
    container.service(
      'getRecommendedTvShowsService',
      (container) =>
        new GetRecommendedTvShowsService({
          getRecommendedTvShowsRepository:
            container.getRecommendedTvShowsRepository
        })
    )
    container.service(
      'getRecommendedTvShowsController',
      (container) =>
        new GetRecommendedTvShowsController({
          getRecommendedTvShowsService: container.getRecommendedTvShowsService
        })
    )
  }
}

export default GetRecommendedTvShowsProvider
