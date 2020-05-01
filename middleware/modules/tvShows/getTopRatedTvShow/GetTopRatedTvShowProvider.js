import { GetTopRatedTvShowRepository } from './infrastructure/repository/GetTopRatedTvShowRepository'
import { GetTopRatedTvShowService } from './application/usecase/GetTopRatedTvShowService'
import { GetTopRatedTvShowController } from './userapplication/controller/GetTopRatedTvShowController'
/* eslint-disable camelcase, no-console */
class GetTopRatedTvShowProvider {
  constructor(container) {
    container.service(
      'getTopRatedTvShowRepository',
      (container) =>
        new GetTopRatedTvShowRepository({ ...container.configuration })
    )
    container.service(
      'getTopRatedTvShowService',
      (container) =>
        new GetTopRatedTvShowService({
          getTopRatedTvShowRepository: container.getTopRatedTvShowRepository
        })
    )
    container.service(
      'getTopRatedTvShowController',
      (container) =>
        new GetTopRatedTvShowController({
          getTopRatedTvShowService: container.getTopRatedTvShowService
        })
    )
  }
}

export default GetTopRatedTvShowProvider
