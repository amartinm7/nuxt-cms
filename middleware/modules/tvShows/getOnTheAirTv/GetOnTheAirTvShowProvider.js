import { GetOnTheAirTvShowRepository } from './infrastructure/repository/GetOnTheAirTvShowRepository'
import { GetOnTheAirTvShowService } from './application/usecase/GetOnTheAirTvShowService'
import { GetOnTheAirTvShowController } from './userapplication/controller/GetOnTheAirTvShowController'
/* eslint-disable camelcase, no-console */
class GetOnTheAirTvShowProvider {
  constructor(container) {
    container.service(
      'getOnTheAirTvShowRepository',
      (container) =>
        new GetOnTheAirTvShowRepository({ ...container.configuration })
    )
    container.service(
      'getOnTheAirTvShowService',
      (container) =>
        new GetOnTheAirTvShowService({
          getOnTheAirTvShowRepository: container.getOnTheAirTvShowRepository
        })
    )
    container.service(
      'getOnTheAirTvShowController',
      (container) =>
        new GetOnTheAirTvShowController({
          getOnTheAirTvShowService: container.getOnTheAirTvShowService
        })
    )
  }
}

export default GetOnTheAirTvShowProvider
