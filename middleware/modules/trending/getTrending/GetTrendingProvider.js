import { GetTrendingMoviesRepository } from './infrastructure/repository/GetTrendingMoviesRepository'
import { GetTrendingMoviesService } from './application/usecase/GetTrendingMoviesService'
import { GetTrendingMoviesController } from './userapplication/controller/GetTrendingMoviesController'
/* eslint-disable camelcase, no-console */
class GetTrendingProvider {
  constructor(container) {
    container.service(
      'getTrendingMoviesRepository',
      (container) =>
        new GetTrendingMoviesRepository({ ...container.configuration })
    )
    container.service(
      'getTrendingMoviesService',
      (container) =>
        new GetTrendingMoviesService({
          getTrendingMoviesRepository: container.getTrendingMoviesRepository
        })
    )
    container.service(
      'getTrendingMoviesController',
      (container) =>
        new GetTrendingMoviesController({
          getTrendingMoviesService: container.getTrendingMoviesService
        })
    )
  }
}

export default GetTrendingProvider
