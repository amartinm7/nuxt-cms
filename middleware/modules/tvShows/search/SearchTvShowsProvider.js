import { SearchTvShowsRepository } from './infrastructure/repository/SearchTvShowsRepository'
import { SearchTvShowsService } from './application/usecase/SearchTvShowsService'
import { SearchTvShowsController } from './userapplication/controller/SearchTvShowsController'
/* eslint-disable camelcase, no-console */
class SearchTvShowsProvider {
  constructor(container) {
    container.service(
      'searchTvShowsRepository',
      (container) => new SearchTvShowsRepository({ ...container.configuration })
    )
    container.service(
      'searchTvShowsService',
      (container) =>
        new SearchTvShowsService({
          searchTvShowsRepository: container.searchTvShowsRepository
        })
    )
    container.service(
      'searchTvShowsController',
      (container) =>
        new SearchTvShowsController({
          searchTvShowsService: container.searchTvShowsService
        })
    )
  }
}

export default SearchTvShowsProvider
