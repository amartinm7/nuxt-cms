import { FindTvShowsByRepository } from './infrastructure/repository/FindTvShowsByRepository'
import { FindTvShowsByService } from './application/usecase/FindTvShowsByService'
import { FindTvShowsByController } from './userapplication/controller/FindTvShowsByController'
/* eslint-disable camelcase, no-console */
class FindTvShowsByProvider {
  constructor(container) {
    container.service(
      'findTvShowsByRepository',
      (container) => new FindTvShowsByRepository({ ...container.configuration })
    )
    container.service(
      'findTvShowsByService',
      (container) =>
        new FindTvShowsByService({
          findTvShowsByRepository: container.findTvShowsByRepository
        })
    )
    container.service(
      'findTvShowsByController',
      (container) =>
        new FindTvShowsByController({
          findTvShowsByService: container.findTvShowsByService
        })
    )
  }
}

export default FindTvShowsByProvider
