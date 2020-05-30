import { SearchMoviesRepositoryRequest } from '../../infrastructure/repository/SearchMoviesRepository'
/* eslint-disable camelcase, no-console */
class SearchMoviesService {
  constructor({ searchMoviesRepository }) {
    this._searchMoviesRepository = searchMoviesRepository
  }

  async execute(searchMoviesServiceRequest) {
    const searchMoviesRepositoryResponse = await this._searchMoviesRepository.executeAsync(
      new SearchMoviesRepositoryRequest({
        ...searchMoviesServiceRequest
      })
    )
    return {
      ...searchMoviesRepositoryResponse
    }
  }
}

class SearchMoviesServiceRequest {
  constructor({ query, language }) {
    this.query = query
    this.language = language
  }
}

export { SearchMoviesService, SearchMoviesServiceRequest }
