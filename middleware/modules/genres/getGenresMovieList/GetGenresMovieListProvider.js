import { GetGenresMovieListRepository } from './infrastructure/repository/GetGenresMovieListRepository'
import { GetGenresMovieListService } from './application/usecase/GetGenresMovieListService'
import { GetGenresMovieListController } from './userapplication/controller/GetGenresMovieListController'
/* eslint-disable camelcase, no-console */
class GetGenresMovieListProvider {
  constructor(container) {
    container.service(
      'getGenresMovieListRepository',
      (container) =>
        new GetGenresMovieListRepository({ ...container.configuration })
    )
    container.service(
      'getGenresMovieListService',
      (container) =>
        new GetGenresMovieListService({
          getGenresMovieListRepository: container.getGenresMovieListRepository
        })
    )
    container.service(
      'getGenresMovieListController',
      (container) =>
        new GetGenresMovieListController({
          getGenresMovieListService: container.getGenresMovieListService
        })
    )
  }
}

export default GetGenresMovieListProvider
