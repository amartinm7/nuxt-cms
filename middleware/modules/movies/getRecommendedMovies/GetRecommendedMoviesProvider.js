import { GetRecommendedMoviesRepository } from './infrastructure/repository/GetRecommendedMoviesRepository'
import { GetRecommendedMoviesService } from './application/usecase/GetRecommendedMoviesService'
import { GetRecommendedMoviesController } from './userapplication/controller/GetRecommendedMoviesController'
/* eslint-disable camelcase, no-console */
class GetRecommendedMoviesProvider {
  constructor(container) {
    container.service(
      'getRecommendedMoviesRepository',
      (container) =>
        new GetRecommendedMoviesRepository({ ...container.configuration })
    )
    container.service(
      'getRecommendedMoviesService',
      (container) =>
        new GetRecommendedMoviesService({
          getRecommendedMoviesRepository:
            container.getRecommendedMoviesRepository
        })
    )
    container.service(
      'getRecommendedMoviesController',
      (container) =>
        new GetRecommendedMoviesController({
          getRecommendedMoviesService: container.getRecommendedMoviesService
        })
    )
  }
}

export default GetRecommendedMoviesProvider
