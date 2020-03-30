import { MEDIA_TYPES, TIME_WINDOWS_TYPES } from '../../adomain/TrendingTypes'
import { GetTrendingMoviesServiceRequest } from '../../application/usecase/GetTrendingMoviesService'

class GetTrendingMoviesController {
  constructor({ getTrendingMoviesService }) {
    this._getTrendingMoviesService = getTrendingMoviesService
  }

  async execute(getTrendingMoviesControllerRequest) {
    const getTrendingMoviesServiceResponse = await this._getTrendingMoviesService.execute(
      new GetTrendingMoviesServiceRequest({
        ...getTrendingMoviesControllerRequest
      })
    )
    return getTrendingMoviesServiceResponse
  }

  getTrendingMovies() {
    return this.execute({
      mediaType: MEDIA_TYPES.MOVIE,
      timeWindow: TIME_WINDOWS_TYPES.WEEK
    })
  }

  getTrendingTVShows() {
    return this.execute({
      mediaType: MEDIA_TYPES.TV,
      timeWindow: TIME_WINDOWS_TYPES.WEEK
    })
  }
}

export { GetTrendingMoviesController }
