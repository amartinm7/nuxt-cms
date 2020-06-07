import { GetMovieVideosServiceRequest } from '../../application/usecase/GetMovieVideosService'
/* eslint-disable camelcase, no-console */
const _isEmpty = require('lodash.isempty')

class GetMovieVideosController {
  constructor({ getMovieVideosService }) {
    this._getMovieVideosService = getMovieVideosService
  }

  async execute(getMovieVideosControllerRequest) {
    const getMovieVideosServiceResponse = await this._getMovieVideosService.execute(
      new GetMovieVideosServiceRequest({ ...getMovieVideosControllerRequest })
    )
    return { ...getMovieVideosServiceResponse }
  }

  async getFirstVideoURL(getMovieVideosControllerRequest) {
    const { movie_title, movie_id, isoLangCode } = {
      ...getMovieVideosControllerRequest
    }
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
    console.log(
      `movieVideo: ${movie_id}, ${movie_title}, ${isoLangCode}, ${url}`
    )
    return { url }
  }
}

/* eslint-disable camelcase */
class GetMovieVideosControllerRequest {
  constructor({ movie_title, movie_id, isoLangCode }) {
    this._movie_title = movie_title
    this.movie_id = movie_id
    this.isoLangCode = isoLangCode
  }
}

export { GetMovieVideosController, GetMovieVideosControllerRequest }
