import { GetTvSeasonsRepository } from './infrastructure/repository/GetTvSeasonsRepository'
import { GetTvSeasonsService } from './application/usecase/GetTvSeasonsService'
import { GetTvSeasonsController } from './userapplication/controller/GetTvSeasonsController'
/* eslint-disable camelcase, no-console */
class GetTvSeasonsProvider {
  constructor(container) {
    container.service(
      'getTvSeasonsRepository',
      (container) => new GetTvSeasonsRepository({ ...container.configuration })
    )
    container.service(
      'getTvSeasonsService',
      (container) =>
        new GetTvSeasonsService({
          getTvSeasonsRepository: container.getTvSeasonsRepository
        })
    )
    container.service(
      'getTvSeasonsController',
      (container) =>
        new GetTvSeasonsController({
          getTvSeasonsService: container.getTvSeasonsService
        })
    )
  }
}

export default GetTvSeasonsProvider
