import { GetSimilarMoviesRepository } from './infrastructure/repository/GetSimilarMoviesRepository'
import { GetSimilarMoviesService } from './application/usecase/GetSimilarMoviesService'
import { GetSimilarMoviesController } from './userapplication/controller/GetSimilarMoviesController'
/* eslint-disable camelcase, no-console */
class GetSimilarMoviesProvider {
  constructor(container) {
    container.service(
      'getSimilarMoviesRepository',
      (container) =>
        new GetSimilarMoviesRepository({ ...container.configuration })
    )
    container.service(
      'getSimilarMoviesService',
      (container) =>
        new GetSimilarMoviesService({
          getSimilarMoviesRepository: container.getSimilarMoviesRepository
        })
    )
    container.service(
      'getSimilarMoviesController',
      (container) =>
        new GetSimilarMoviesController({
          getSimilarMoviesService: container.getSimilarMoviesService
        })
    )
  }
}

export default GetSimilarMoviesProvider
