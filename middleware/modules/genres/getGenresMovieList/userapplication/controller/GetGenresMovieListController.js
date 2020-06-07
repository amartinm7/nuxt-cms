/* eslint-disable camelcase, no-console */
class GetGenresMovieListController {
  constructor({ getGenresMovieListService }) {
    this._getGenresMovieListService = getGenresMovieListService
  }

  async execute(getGenresMovieListControllerRequest) {
    const getGenresMovieListServiceResponse = await this._getGenresMovieListService.execute()
    return { ...getGenresMovieListServiceResponse }
  }
}

export { GetGenresMovieListController }
