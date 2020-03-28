class GetGenresTvShowListController {
  constructor({ getGenresTvShowListService }) {
    this._getGenresTvShowListService = getGenresTvShowListService
  }

  async execute(getGenresTvShowListControllerRequest) {
    console.log('>>>GetGenresTvShowListController.execute')
    const getGenresTvShowListServiceResponse = await this._getGenresTvShowListService.execute()
    return { ...getGenresTvShowListServiceResponse }
  }
}

export { GetGenresTvShowListController }
