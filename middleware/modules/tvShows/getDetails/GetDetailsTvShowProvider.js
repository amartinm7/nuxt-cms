/* eslint-disable camelcase, no-console */
import { GetTvShowDetailsRepository } from './infrastructure/repository/GetTvShowDetailsRepository'
// eslint-disable-next-line import/named
import { GetTvShowDetailsService } from './application/usecase/GetTvShowDetailsService'
// eslint-disable-next-line import/named
import { GetTvShowDetailsController } from './userapplication/controller/GetTvShowDetailsController'

class GetDetailsTvShowProvider {
  constructor(container) {
    container.service(
      'getTvShowDetailsRepository',
      (container) =>
        new GetTvShowDetailsRepository({ ...container.configuration })
    )
    container.service(
      'getTvShowDetailsService',
      (container) =>
        new GetTvShowDetailsService({
          getTvShowDetailsRepository: container.getTvShowDetailsRepository
        })
    )
    container.service(
      'getTvShowDetailsController',
      (container) =>
        new GetTvShowDetailsController({
          getTvShowDetailsService: container.getTvShowDetailsService
        })
    )
  }
}

export default GetDetailsTvShowProvider
