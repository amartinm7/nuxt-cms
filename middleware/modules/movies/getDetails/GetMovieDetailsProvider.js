import { GetMovieDetailsRepository } from './infrastructure/repository/GetMovieDetailsRepository'
import { GetMovieDetailsService } from './application/usecase/GetMovieDetailsService'
import { GetMovieDetailsController } from './userapplication/controller/GetMovieDetailsController'
/* eslint-disable camelcase, no-console */
class GetMovieDetailsProvider {
  constructor(container) {
    container.service(
      'getMovieDetailsRepository',
      (container) =>
        new GetMovieDetailsRepository({ ...container.configuration })
    )
    container.service(
      'getMovieDetailsService',
      (container) =>
        new GetMovieDetailsService({
          getMovieDetailsRepository: container.getMovieDetailsRepository
        })
    )
    container.service(
      'getMovieDetailsController',
      (container) =>
        new GetMovieDetailsController({
          getMovieDetailsService: container.getMovieDetailsService
        })
    )
  }
}

export default GetMovieDetailsProvider
