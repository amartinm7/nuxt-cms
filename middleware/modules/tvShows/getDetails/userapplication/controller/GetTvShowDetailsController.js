/* eslint-disable camelcase, no-console */
// eslint-disable-next-line import/named
import { GetTvShowDetailsServiceRequest } from '../../application/usecase/GetTvShowDetailsService'

class GetTvShowDetailsController {
  constructor({ getTvShowDetailsService }) {
    this._getTvShowDetailsService = getTvShowDetailsService
  }

  async execute(getTvShowDetailsControllerRequest) {
    const getTvShowDetailsServiceResponse = await this._getTvShowDetailsService.execute(
      new GetTvShowDetailsServiceRequest({
        ...getTvShowDetailsControllerRequest
      })
    )
    return { ...getTvShowDetailsServiceResponse }
  }
}

/* eslint-disable camelcase */
class GetTvShowDetailsControllerRequest {
  constructor({ movie_id, language }) {
    this.movie_id = movie_id
    this.language = language
  }
}
export { GetTvShowDetailsController, GetTvShowDetailsControllerRequest }
