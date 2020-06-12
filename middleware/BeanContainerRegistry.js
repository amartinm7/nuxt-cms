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
import GetPopularMoviesProvider from './modules/movies/getPopularMovies/GetPopularMoviesProvider'
import GetTopRatedMoviesProvider from './modules/movies/getTopRatedMovies/GetTopRatedMoviesProvider'
import GetUpcomingMoviesProvider from './modules/movies/getUpcomingMovies/GetUpcomingMoviesProvider'
import SearchTvShowsProvider from './modules/tvShows/search/SearchTvShowsProvider'
import SearchMoviesProvider from './modules/movies/search/SearchMoviesProvider'
import FindMoviesByProvider from './modules/movies/findBy/FindMoviesByProvider'
import FindTvShowsByProvider from './modules/tvShows/findBy/FindTvShowsByProvider'
import GetPeopleDetailsProvider from './modules/people/getDetails/GetPeopleDetailsProvider'
import GetMultiSearchByTitleProvider from './modules/all/getMultiSearchByTitle/GetMultiSearchByTitleProvider'

const _isEmpty = require('lodash.isempty')
/* eslint-disable camelcase, no-console, no-new */
let beanContainerRegistryInstance = null

export class BeanContainerRegistry {
  constructor(theMovieDBConfigToken, axiosRef) {
    this._beanContainer = new BeanContainer()
    // TODO INJECT THIS DEPENCIES IN A NEAR FUTURE
    const accessToken = !_isEmpty(theMovieDBConfigToken)
      ? theMovieDBConfigToken
      : theMovieDBConfigEnv
    const axios = !_isEmpty(axiosRef) ? axiosRef : require('axios')

    this._beanContainer.service(
      'configuration',
      (container) =>
        new Configuration({
          accessToken,
          axios
        })
    )
    new GetGenresMovieListProvider(this._beanContainer)
    new GetMovieDetailsProvider(this._beanContainer)
    new GetGenresTvShowListProvider(this._beanContainer)
    new GetLatestProvider(this._beanContainer)
    new GetVideosProvider(this._beanContainer)
    new GetTrendingProvider(this._beanContainer)
    new GetVideosTvShowProvider(this._beanContainer)
    new GetDetailsTvShowProvider(this._beanContainer)
    new GetLatestTvShowProvider(this._beanContainer)
    new GetAiringTodayTvShowProvider(this._beanContainer)
    new GetOnTheAirTvShowProvider(this._beanContainer)
    new GetPopularTvShowProvider(this._beanContainer)
    new GetTopRatedTvShowProvider(this._beanContainer)
    new GetNowPlayingMoviesProvider(this._beanContainer)
    new GetPopularMoviesProvider(this._beanContainer)
    new GetTopRatedMoviesProvider(this._beanContainer)
    new GetUpcomingMoviesProvider(this._beanContainer)
    new SearchTvShowsProvider(this._beanContainer)
    new SearchMoviesProvider(this._beanContainer)
    new FindTvShowsByProvider(this._beanContainer)
    new FindMoviesByProvider(this._beanContainer)
    new GetPeopleDetailsProvider(this._beanContainer)
    new GetMultiSearchByTitleProvider(this._beanContainer)
  }

  static _getInstance(theMovieDBConfigToken, axios) {
    if (!beanContainerRegistryInstance) {
      beanContainerRegistryInstance = new BeanContainerRegistry(
        theMovieDBConfigToken,
        axios
      )
    }
    return beanContainerRegistryInstance
  }

  static getBeanContainer() {
    return BeanContainerRegistry._getInstance()._beanContainer
  }

  static getBeanContainerWithAxios(axios) {
    return BeanContainerRegistry._getInstance(null, axios)._beanContainer
  }

  static getBeanContainerWith(theMovieDBConfigToken) {
    return BeanContainerRegistry._getInstance(theMovieDBConfigToken)
      ._beanContainer
  }
}

export default { BeanContainerRegistry }
