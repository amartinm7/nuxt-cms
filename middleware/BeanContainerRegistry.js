import BeanContainer from './BeanContainer'
import { theMovieDBConfigEnv } from './framework/modules/security/GetTheMovieDBConfiguration'
import Configuration from './Configuration'
import GetGenresMovieListProvider from './modules/genres/getGenresMovieList/GetGenresMovieListProvider'
import GetGenresTvShowListProvider from './modules/genres/getGenresTvShowList/GetGenresTvShowListProvider'
import GetLatestProvider from './modules/movies/getLatest/GetLatestMoviesProvider'
import GetVideosProvider from './modules/movies/getVideos/GetVideosMoviesProvider'
import GetTrendingProvider from './modules/trending/getTrending/GetTrendingProvider'
import GetVideosTvShowProvider from './modules/tvShows/getVideos/GetVideosTvShowProvider'
import GetMovieDetailsProvider from './modules/movies/getDetails/GetMovieDetailsProvider'
import GetDetailsTvShowProvider from './modules/tvShows/getDetails/GetDetailsTvShowProvider'
import GetLatestTvShowProvider from './modules/tvShows/getLatest/GetLatestTvShowProvider'
import GetAiringTodayTvShowProvider from './modules/tvShows/getAiringToday/GetAiringTodayTvShowProvider'
import GetOnTheAirTvShowProvider from './modules/tvShows/getOnTheAirTv/GetOnTheAirTvShowProvider'
import GetPopularTvShowProvider from './modules/tvShows/getPopular/GetPopularTvShowProvider'
import GetTopRatedTvShowProvider from './modules/tvShows/getTopRatedTvShow/GetTopRatedTvShowProvider'
import GetNowPlayingMoviesProvider from './modules/movies/getNowPlayingMovies/GetNowPlayingMoviesProvider'
const _isEmpty = require('lodash.isempty')
/* eslint-disable camelcase, no-console */
let beanContainerRegistryInstance = null

export class BeanContainerRegistry {
  constructor(token, axiosRef) {
    this._beanContainer = new BeanContainer()
    // TODO INJECT THIS DEPENCIES IN A NEAR FUTURE
    const accessToken = !_isEmpty(token) ? token : theMovieDBConfigEnv
    const axios = !_isEmpty(axiosRef) ? axiosRef : require('axios')

    this._beanContainer.service(
      'configuration',
      (container) =>
        new Configuration({
          accessToken,
          axios
        })
    )
    // eslint-disable-next-line no-new
    new GetGenresMovieListProvider(this._beanContainer)
    // eslint-disable-next-line no-new
    new GetMovieDetailsProvider(this._beanContainer)
    // eslint-disable-next-line no-new
    new GetGenresTvShowListProvider(this._beanContainer)
    // eslint-disable-next-line no-new
    new GetLatestProvider(this._beanContainer)
    // eslint-disable-next-line no-new
    new GetVideosProvider(this._beanContainer)
    // eslint-disable-next-line no-new
    new GetTrendingProvider(this._beanContainer)
    // eslint-disable-next-line no-new
    new GetVideosTvShowProvider(this._beanContainer)
    // eslint-disable-next-line no-new
    new GetDetailsTvShowProvider(this._beanContainer)
    // eslint-disable-next-line no-new
    new GetLatestTvShowProvider(this._beanContainer)
    // eslint-disable-next-line no-new
    new GetAiringTodayTvShowProvider(this._beanContainer)
    // eslint-disable-next-line no-new
    new GetOnTheAirTvShowProvider(this._beanContainer)
    // eslint-disable-next-line no-new
    new GetPopularTvShowProvider(this._beanContainer)
    // eslint-disable-next-line no-new
    new GetTopRatedTvShowProvider(this._beanContainer)
    // eslint-disable-next-line no-new
    new GetNowPlayingMoviesProvider(this._beanContainer)
  }

  static _getInstance(token, axios) {
    if (!beanContainerRegistryInstance) {
      beanContainerRegistryInstance = new BeanContainerRegistry(token, axios)
    }
    return beanContainerRegistryInstance
  }

  static getBeanContainer() {
    return BeanContainerRegistry._getInstance()._beanContainer
  }

  static getBeanContainerWith(token) {
    return BeanContainerRegistry._getInstance(token)._beanContainer
  }
}

export default { BeanContainerRegistry }
