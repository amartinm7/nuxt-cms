import { SearchMoviesServiceRequest } from '../../application/usecase/SearchMoviesService'
/* eslint-disable camelcase, no-console */
class SearchMoviesController {
  constructor({ searchMoviesService }) {
    this._searchMoviesService = searchMoviesService
  }

  async execute(searchMoviesControllerRequest) {
    const searchMoviesServiceResponse = await this._searchMoviesService.execute(
      new SearchMoviesServiceRequest({
        ...searchMoviesControllerRequest
      })
    )
    return searchMoviesServiceResponse
  }
}

/* eslint-disable camelcase */
class SearchMoviesControllerRequest {
  constructor({ query, language }) {
    this.query = query
    this.language = language
  }
}

export { SearchMoviesController, SearchMoviesControllerRequest }
