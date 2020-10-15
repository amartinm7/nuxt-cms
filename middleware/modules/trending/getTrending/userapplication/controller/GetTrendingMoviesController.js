import { MEDIA_TYPES, TIME_WINDOWS_TYPES } from '../../adomain/TrendingTypes'
import { GetTrendingMoviesServiceRequest } from '../../application/usecase/GetTrendingMoviesService'
/* eslint-disable camelcase, no-console */
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

  getTrendingMovies({ language, page }) {
    return this.execute({
      mediaType: MEDIA_TYPES.MOVIE,
      timeWindow: TIME_WINDOWS_TYPES.WEEK,
      language,
      page
    })
  }

  getTrendingTVShows({ language, page }) {
    // eslint-disable-next-line no-return-await
    return this.execute({
      mediaType: MEDIA_TYPES.TV,
      timeWindow: TIME_WINDOWS_TYPES.WEEK,
      language,
      page
    })
  }

  getTrendingMoviesAndTVShows = async ({ language, page }) => {
    const getTrendingMoviesResponse = await this.getTrendingMovies({
      language,
      page
    })
    const trendingMovies = {
      ...getTrendingMoviesResponse
    }
    const getTrendingTVShowsResponse = await this.getTrendingTVShows({
      language,
      page
    })
    const trendingTVShows = {
      ...getTrendingTVShowsResponse
    }
    return { trendingMovies, trendingTVShows }
  }
}

export { GetTrendingMoviesController }
