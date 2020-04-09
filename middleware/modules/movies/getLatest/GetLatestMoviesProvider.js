import { GetLatestMoviesRepository } from './infrastructure/repository/GetLatestMoviesRepository'
import { GetLatestMoviesService } from './application/usecase/GetLatestMoviesService'
import { GetLatestMoviesController } from './userapplication/controller/GetLatestMoviesController'
/* eslint-disable camelcase, no-console */
class GetLatestMoviesProvider {
  constructor(container) {
    container.service(
      'getLatestMoviesRepository',
      (container) =>
        new GetLatestMoviesRepository({ ...container.configuration })
    )
    container.service(
      'getLatestMoviesService',
      (container) =>
        new GetLatestMoviesService({
          getLatestMoviesRepository: container.getLatestMoviesRepository
        })
    )
    container.service(
      'getLatestMoviesController',
      (container) =>
        new GetLatestMoviesController({
          getLatestMoviesService: container.getLatestMoviesService
        })
    )
  }
}

export default GetLatestMoviesProvider
