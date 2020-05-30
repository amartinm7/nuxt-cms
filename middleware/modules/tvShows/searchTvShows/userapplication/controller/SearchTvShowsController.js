import { SearchTvShowsServiceRequest } from '../../application/usecase/SearchTvShowsService'
/* eslint-disable camelcase, no-console */
class SearchTvShowsController {
  constructor({ searchTvShowsService }) {
    this._searchTvShowsService = searchTvShowsService
  }

  async execute(searchTvShowsControllerRequest) {
    const searchTvShowsServiceResponse = await this._searchTvShowsService.execute(
      new SearchTvShowsServiceRequest({
        ...searchTvShowsControllerRequest
      })
    )
    return searchTvShowsServiceResponse
  }
}

/* eslint-disable camelcase */
class SearchTvShowsControllerRequest {
  constructor({ language }) {
    this.language = language
  }
}

export { SearchTvShowsController, SearchTvShowsControllerRequest }
