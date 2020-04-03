import { GetMovieDetailsServiceRequest } from '../../application/usecase/GetMovieDetailsService'

class GetMovieDetailsController {
  constructor({ getMovieDetailsService }) {
    this._getMovieDetailsService = getMovieDetailsService
  }

  async execute(getMovieDetailsControllerRequest) {
    console.log('>>>GetMovieDetailsController.execute')
    const getMovieDetailsServiceResponse = await this._getMovieDetailsService.execute(
      new GetMovieDetailsServiceRequest({ ...getMovieDetailsControllerRequest })
    )
    return { ...getMovieDetailsServiceResponse }
  }
}

/* eslint-disable camelcase */
class GetMovieDetailsControllerRequest {
  constructor({ movie_id }) {
    this.movie_id = movie_id
  }
}
export { GetMovieDetailsController, GetMovieDetailsControllerRequest }