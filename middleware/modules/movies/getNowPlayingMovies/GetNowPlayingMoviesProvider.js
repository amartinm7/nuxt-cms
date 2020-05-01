import { GetNowPlayingMoviesRepository } from './infrastructure/repository/GetNowPlayingMoviesRepository'
import { GetNowPlayingMoviesService } from './application/usecase/GetNowPlayingMoviesService'
import { GetNowPlayingMoviesController } from './userapplication/controller/GetNowPlayingMoviesController'
/* eslint-disable camelcase, no-console */
class GetNowPlayingMoviesProvider {
  constructor(container) {
    container.service(
      'getNowPlayingMoviesRepository',
      (container) =>
        new GetNowPlayingMoviesRepository({ ...container.configuration })
    )
    container.service(
      'getNowPlayingMoviesService',
      (container) =>
        new GetNowPlayingMoviesService({
          getNowPlayingMoviesRepository: container.getNowPlayingMoviesRepository
        })
    )
    container.service(
      'getNowPlayingMoviesController',
      (container) =>
        new GetNowPlayingMoviesController({
          getNowPlayingMoviesService: container.getNowPlayingMoviesService
        })
    )
  }
}

export default GetNowPlayingMoviesProvider
