class GetGenresMovieListController {
  constructor({ getGenresMovieListService }) {
    this._getGenresMovieListService = getGenresMovieListService
  }

  async execute(getGenresMovieListControllerRequest) {
    console.log('>>>GetMovieVideosController.execute')
    const getGenresMovieListServiceResponse = await this._getGenresMovieListService.execute()
    return { ...getGenresMovieListServiceResponse }
  }
}

export { GetGenresMovieListController }
