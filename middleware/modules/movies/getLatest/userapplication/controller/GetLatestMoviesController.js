class GetLatestMoviesController {
  constructor({ getLatestMoviesService }) {
    this._getLatestMoviesService = getLatestMoviesService
  }

  execute() {
    console.log('>>>GetLatestMoviesController.execute')
  }
}

export { GetLatestMoviesController }
