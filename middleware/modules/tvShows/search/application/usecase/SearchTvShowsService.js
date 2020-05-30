import { SearchTvShowsRepositoryRequest } from '../../infrastructure/repository/SearchTvShowsRepository'
/* eslint-disable camelcase, no-console */
class SearchTvShowsService {
  constructor({ searchTvShowsRepository }) {
    this._searchTvShowsRepository = searchTvShowsRepository
  }

  async execute(searchTvShowsServiceRequest) {
    const searchTvShowsRepositoryResponse = await this._searchTvShowsRepository.executeAsync(
      new SearchTvShowsRepositoryRequest({
        ...searchTvShowsServiceRequest
      })
    )
    return {
      ...searchTvShowsRepositoryResponse
    }
  }
}

class SearchTvShowsServiceRequest {
  constructor({ query, language }) {
    this.query = query
    this.language = language
  }
}

export { SearchTvShowsService, SearchTvShowsServiceRequest }
