/* eslint-disable camelcase, no-console */
class GetGenresTvShowListController {
  constructor({ getGenresTvShowListService }) {
    this._getGenresTvShowListService = getGenresTvShowListService
  }

  async execute(getGenresTvShowListControllerRequest) {
    const getGenresTvShowListServiceResponse = await this._getGenresTvShowListService.execute()
    return { ...getGenresTvShowListServiceResponse }
  }
}

export { GetGenresTvShowListController }
