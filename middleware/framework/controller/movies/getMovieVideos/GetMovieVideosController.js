import { GetMovieVideosServiceRequest } from '../../../../application/usecases/movies/getMovieVideos/GetMovieVideosService'

class GetMovieVideosController {
  constructor({ getMovieVideosService }) {
    this._getMovieVideosService = getMovieVideosService
  }

  async execute(getMovieVideosControllerRequest) {
    console.log('>>>GetMovieVideosController.execute')
    const getMovieVideosServiceResponse = await this._getMovieVideosService.execute(
      new GetMovieVideosServiceRequest({ ...getMovieVideosControllerRequest })
    )
    return { ...getMovieVideosServiceResponse }
  }
}

/* eslint-disable camelcase */
class GetMovieVideosControllerRequest {
  constructor({ movie_id }) {
    this.movie_id = movie_id
  }
}

export { GetMovieVideosController, GetMovieVideosControllerRequest }
