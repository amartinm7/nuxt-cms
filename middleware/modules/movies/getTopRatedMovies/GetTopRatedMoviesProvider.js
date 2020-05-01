import { GetTopRatedMoviesRepository } from './infrastructure/repository/GetTopRatedMoviesRepository'
import { GetTopRatedMoviesService } from './application/usecase/GetTopRatedMoviesService'
import { GetTopRatedMoviesController } from './userapplication/controller/GetTopRatedMoviesController'
/* eslint-disable camelcase, no-console */
class GetTopRatedMoviesProvider {
  constructor(container) {
    container.service(
      'getTopRatedMoviesRepository',
      (container) =>
        new GetTopRatedMoviesRepository({ ...container.configuration })
    )
    container.service(
      'getTopRatedMoviesService',
      (container) =>
        new GetTopRatedMoviesService({
          getTopRatedMoviesRepository: container.getTopRatedMoviesRepository
        })
    )
    container.service(
      'getTopRatedMoviesController',
      (container) =>
        new GetTopRatedMoviesController({
          getTopRatedMoviesService: container.getTopRatedMoviesService
        })
    )
  }
}

export default GetTopRatedMoviesProvider
