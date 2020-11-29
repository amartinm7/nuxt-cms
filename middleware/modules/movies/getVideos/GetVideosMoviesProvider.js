import { GetMovieVideosRepository } from './infrastructure/repository/GetMovieVideosRepository'
import { GetMovieVideosService } from './application/usecase/GetMovieVideosService'
import { GetMovieVideosController } from './userapplication/controller/GetMovieVideosController'
/* eslint-disable camelcase, no-console */
class GetVideosMoviesProvider {
  constructor(container) {
    container.service(
      'getMovieVideosRepository',
      (container) =>
        new GetMovieVideosRepository({ ...container.configuration })
    )
    container.service(
      'getMovieVideosService',
      (container) =>
        new GetMovieVideosService({
          getMovieVideosRepository: container.getMovieVideosRepository
        })
    )
    container.service(
      'getMovieVideosController',
      (container) =>
        new GetMovieVideosController({
          getMovieVideosService: container.getMovieVideosService
        })
    )
  }
}

export default GetVideosMoviesProvider
