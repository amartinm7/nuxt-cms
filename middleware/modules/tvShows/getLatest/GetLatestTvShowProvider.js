import { GetLatestTvShowRepository } from './infrastructure/repository/GetLatestTvShowRepository'
import { GetLatestTvShowService } from './application/usecase/GetLatestTvShowService'
import { GetLatestTvShowController } from './userapplication/controller/GetLatestTvShowController'
/* eslint-disable camelcase, no-console */
class GetLatestTvShowProvider {
  constructor(container) {
    container.service(
      'getLatestTvShowRepository',
      (container) =>
        new GetLatestTvShowRepository({ ...container.configuration })
    )
    container.service(
      'getLatestTvShowService',
      (container) =>
        new GetLatestTvShowService({
          getLatestTvShowRepository: container.getLatestTvShowRepository
        })
    )
    container.service(
      'getLatestTvShowController',
      (container) =>
        new GetLatestTvShowController({
          getLatestTvShowService: container.getLatestTvShowService
        })
    )
  }
}

export default GetLatestTvShowProvider
