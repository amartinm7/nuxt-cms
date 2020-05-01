import { GetPopularMoviesRepository } from './infrastructure/repository/GetPopularMoviesRepository'
import { GetPopularMoviesService } from './application/usecase/GetPopularMoviesService'
import { GetPopularMoviesController } from './userapplication/controller/GetPopularMoviesController'
/* eslint-disable camelcase, no-console */
class GetPopularMoviesProvider {
  constructor(container) {
    container.service(
      'getPopularMoviesRepository',
      (container) =>
        new GetPopularMoviesRepository({ ...container.configuration })
    )
    container.service(
      'getPopularMoviesService',
      (container) =>
        new GetPopularMoviesService({
          getPopularMoviesRepository: container.getPopularMoviesRepository
        })
    )
    container.service(
      'getPopularMoviesController',
      (container) =>
        new GetPopularMoviesController({
          getPopularMoviesService: container.getPopularMoviesService
        })
    )
  }
}

export default GetPopularMoviesProvider
