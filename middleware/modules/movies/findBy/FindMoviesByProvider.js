import { FindMoviesByRepository } from './infrastructure/repository/FindMoviesByRepository'
import { FindMoviesByService } from './application/usecase/FindMoviesByService'
import { FindMoviesByController } from './userapplication/controller/FindMoviesByController'
/* eslint-disable camelcase, no-console */
class FindMoviesByProvider {
  constructor(container) {
    container.service(
      'findMoviesByRepository',
      (container) => new FindMoviesByRepository({ ...container.configuration })
    )
    container.service(
      'findMoviesByService',
      (container) =>
        new FindMoviesByService({
          findMoviesByRepository: container.findMoviesByRepository
        })
    )
    container.service(
      'findMoviesByController',
      (container) =>
        new FindMoviesByController({
          findMoviesByService: container.findMoviesByService
        })
    )
  }
}

export default FindMoviesByProvider
