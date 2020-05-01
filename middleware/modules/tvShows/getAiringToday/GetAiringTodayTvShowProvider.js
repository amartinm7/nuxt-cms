import { GetAiringTodayTvShowRepository } from './infrastructure/repository/GetAiringTodayTvShowRepository'
import { GetAiringTodayTvShowService } from './application/usecase/GetAiringTodayTvShowService'
import { GetAiringTodayTvShowController } from './userapplication/controller/GetAiringTodayTvShowController'
/* eslint-disable camelcase, no-console */
class GetAiringTodayTvShowProvider {
  constructor(container) {
    container.service(
      'getAiringTodayTvShowRepository',
      (container) =>
        new GetAiringTodayTvShowRepository({ ...container.configuration })
    )
    container.service(
      'getAiringTodayTvShowService',
      (container) =>
        new GetAiringTodayTvShowService({
          getAiringTodayTvShowRepository:
            container.getAiringTodayTvShowRepository
        })
    )
    container.service(
      'getAiringTodayTvShowController',
      (container) =>
        new GetAiringTodayTvShowController({
          getAiringTodayTvShowService: container.getAiringTodayTvShowService
        })
    )
  }
}

export default GetAiringTodayTvShowProvider
