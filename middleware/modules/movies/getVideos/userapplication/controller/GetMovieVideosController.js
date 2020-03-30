import { GetMovieVideosServiceRequest } from '../../../../application/usecases/movies/getVideos/GetMovieVideosService'
const _isEmpty = require('lodash.isempty')

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

  async getFirstVideoURL(getMovieVideosControllerRequest) {
    const getMovieVideosServiceResponse = await this.execute(
      getMovieVideosControllerRequest
    )
    if (
      _isEmpty(getMovieVideosServiceResponse._results) ||
      _isEmpty(getMovieVideosServiceResponse._results[0])
    ) {
      return {
        url: ''
      }
    }
    const key = getMovieVideosServiceResponse._results[0]._key
    const url = `https://www.youtube.com/embed/${key}?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1`
    return { url }
  }
}

/* eslint-disable camelcase */
class GetMovieVideosControllerRequest {
  constructor({ movie_id }) {
    this.movie_id = movie_id
  }
}

export { GetMovieVideosController, GetMovieVideosControllerRequest }
