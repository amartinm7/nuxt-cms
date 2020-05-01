import { GetPopularTvShowRepository } from './infrastructure/repository/GetPopularTvShowRepository'
import { GetPopularTvShowService } from './application/usecase/GetPopularTvShowService'
import { GetPopularTvShowController } from './userapplication/controller/GetPopularTvShowController'
/* eslint-disable camelcase, no-console */
class GetPopularTvShowProvider {
  constructor(container) {
    container.service(
      'getPopularTvShowRepository',
      (container) =>
        new GetPopularTvShowRepository({ ...container.configuration })
    )
    container.service(
      'getPopularTvShowService',
      (container) =>
        new GetPopularTvShowService({
          getPopularTvShowRepository: container.getPopularTvShowRepository
        })
    )
    container.service(
      'getPopularTvShowController',
      (container) =>
        new GetPopularTvShowController({
          getPopularTvShowService: container.getPopularTvShowService
        })
    )
  }
}

export default GetPopularTvShowProvider
