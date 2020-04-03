class GetMovieDetailsController {
  constructor({ getMovieDetailsService }) {
    this._getMovieDetailsService = getMovieDetailsService
  }

  execute() {
    console.log('>>>GetMovieDetailsController.execute')
  }
}

export { GetMovieDetailsController }
