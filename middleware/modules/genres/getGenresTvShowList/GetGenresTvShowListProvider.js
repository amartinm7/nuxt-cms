import { GetGenresTvShowListRepository } from './infrastructure/repository/GetGenresTvShowListRepository'
import { GetGenresTvShowListService } from './application/usecase/GetGenresTvShowListService'
import { GetGenresTvShowListController } from './userapplication/controller/GetGenresTvShowListController'

module.exports = function(container) {
  container.service(
    'getGenresTvShowListRepository',
    (container) =>
      new GetGenresTvShowListRepository({ ...container.configuration })
  )
  container.service(
    'getGenresTvShowListService',
    (container) =>
      new GetGenresTvShowListService({
        getGenresTvShowListRepository: container.getGenresTvShowListRepository
      })
  )
  container.service(
    'getGenresTvShowListController',
    (container) =>
      new GetGenresTvShowListController({
        getGenresTvShowListService: container.getGenresTvShowListService
      })
  )
}
