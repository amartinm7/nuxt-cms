import { GetUpcomingMoviesRepository } from './infrastructure/repository/GetUpcomingMoviesRepository'
import { GetUpcomingMoviesService } from './application/usecase/GetUpcomingMoviesService'
import { GetUpcomingMoviesController } from './userapplication/controller/GetUpcomingMoviesController'
/* eslint-disable camelcase, no-console */
class GetUpcomingMoviesProvider {
  constructor(container) {
    container.service(
      'getUpcomingMoviesRepository',
      (container) =>
        new GetUpcomingMoviesRepository({ ...container.configuration })
    )
    container.service(
      'getUpcomingMoviesService',
      (container) =>
        new GetUpcomingMoviesService({
          getUpcomingMoviesRepository: container.getUpcomingMoviesRepository
        })
    )
    container.service(
      'getUpcomingMoviesController',
      (container) =>
        new GetUpcomingMoviesController({
          getUpcomingMoviesService: container.getUpcomingMoviesService
        })
    )
  }
}

export default GetUpcomingMoviesProvider
