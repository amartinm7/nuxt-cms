import { SearchMoviesRepository } from './infrastructure/repository/SearchMoviesRepository'
import { SearchMoviesService } from './application/usecase/SearchMoviesService'
import { SearchMoviesController } from './userapplication/controller/SearchMoviesController'
/* eslint-disable camelcase, no-console */
class SearchMoviesProvider {
  constructor(container) {
    container.service(
      'searchMoviesRepository',
      (container) => new SearchMoviesRepository({ ...container.configuration })
    )
    container.service(
      'searchMoviesService',
      (container) =>
        new SearchMoviesService({
          searchMoviesRepository: container.searchMoviesRepository
        })
    )
    container.service(
      'searchMoviesController',
      (container) =>
        new SearchMoviesController({
          searchMoviesService: container.searchMoviesService
        })
    )
  }
}

export default SearchMoviesProvider
