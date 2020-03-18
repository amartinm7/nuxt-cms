class GetTvVideosController {
  constructor({ getTvVideosService }) {
    this._getTvVideosService = getTvVideosService
  }

  execute() {
    console.log('>>>GetTvVideosController.execute')
  }
}

export { GetTvVideosController }
