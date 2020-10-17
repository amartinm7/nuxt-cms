const _isEmpty = require('lodash.isempty')
/* eslint-disable camelcase, no-console */
class GetTvShowsVideosController {
  constructor({ getTvShowsVideosService }) {
    this._getTvShowsVideosService = getTvShowsVideosService
  }

  async execute(getTvShowsVideosControllerRequest) {
    const getTvShowsVideosServiceResponse = await this._getTvShowsVideosService.execute(
      { ...getTvShowsVideosControllerRequest }
    )
    return { ...getTvShowsVideosServiceResponse }
  }

  async getFirstVideoURL(getTvShowsVideosControllerRequest) {
    const isoLangCodeFallBack = 'us-EN'
    let getTvShowsVideosServiceResponse = await this.execute(
      getTvShowsVideosControllerRequest
    )
    if (
      _isEmpty(getTvShowsVideosServiceResponse._results) ||
      _isEmpty(getTvShowsVideosServiceResponse._results[0])
    ) {
      const fallbackRequest = Object.assign(
        {},
        getTvShowsVideosControllerRequest,
        { isoLangCode: isoLangCodeFallBack }
      )
      getTvShowsVideosServiceResponse = await this.execute(fallbackRequest)
    }
    if (
      _isEmpty(getTvShowsVideosServiceResponse._results) ||
      _isEmpty(getTvShowsVideosServiceResponse._results[0])
    ) {
      return { url: '' }
    }
    const key = getTvShowsVideosServiceResponse._results[0]._key
    const url = `https://www.youtube.com/embed/${key}?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1`
    return { url }
  }
}
/* eslint-disable camelcase */
class GetTvShowsVideosControllerRequest {
  constructor({ movie_name, movie_id, isoLangCode }) {
    this._movie_name = movie_name
    this.movie_id = movie_id
    this.isoLangCode = isoLangCode
  }
}

export { GetTvShowsVideosController, GetTvShowsVideosControllerRequest }
