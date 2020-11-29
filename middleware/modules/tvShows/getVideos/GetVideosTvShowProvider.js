import { GetTvShowsVideosService } from './application/usecase/GetTvShowsVideosService'
import { GetTvShowsVideosRepository } from './infrastructure/repository/GetTvShowsVideosRepository'
import { GetTvShowsVideosController } from './userapplication/controller/GetTvShowsVideosController'
/* eslint-disable camelcase, no-console */
class GetVideosTvShowProvider {
  constructor(container) {
    container.service(
      'getTvShowsVideosRepository',
      (container) =>
        new GetTvShowsVideosRepository({ ...container.configuration })
    )
    container.service(
      'getTvShowsVideosService',
      (container) =>
        new GetTvShowsVideosService({
          getTvShowsVideosRepository: container.getTvShowsVideosRepository
        })
    )
    container.service(
      'getTvShowsVideosController',
      (container) =>
        new GetTvShowsVideosController({
          getTvShowsVideosService: container.getTvShowsVideosService
        })
    )
  }
}

export default GetVideosTvShowProvider
