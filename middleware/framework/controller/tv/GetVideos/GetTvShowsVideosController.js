const _isEmpty = require('lodash.isempty')

class GetTvShowsVideosController {
  constructor({ getTvShowsVideosService }) {
    this._getTvShowsVideosService = getTvShowsVideosService
  }

  async execute(getTvShowsVideosControllerRequest) {
    console.log('>>>GetTvShowsVideosController.execute')
    const getTvShowsVideosServiceResponse = await this._getTvShowsVideosService.execute(
      { ...getTvShowsVideosControllerRequest }
    )
    return { ...getTvShowsVideosServiceResponse }
  }

  async getFirstVideoURL(getTvShowsVideosControllerRequest) {
    const getTvShowsVideosServiceResponse = await this.execute(
      getTvShowsVideosControllerRequest
    )
    if (
      _isEmpty(getTvShowsVideosServiceResponse._results) ||
      _isEmpty(getTvShowsVideosServiceResponse._results[0])
    ) {
      return {
        url: ''
      }
    }
    const key = getTvShowsVideosServiceResponse._results[0]._key
    const url = `https://www.youtube.com/embed/${key}?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1`
    return { url }
  }
}
/* eslint-disable camelcase */
class GetTvShowsVideosControllerRequest {
  constructor({ movie_id }) {
    this.movie_id = movie_id
  }
}

export { GetTvShowsVideosController, GetTvShowsVideosControllerRequest }
