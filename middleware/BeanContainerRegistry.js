import BeanContainer from './BeanContainer'
import { theMovieDBConfigEnv } from './framework/modules/security/GlobalConfiguration'
import Configuration from './Configuration'
import GetGenresMovieListProvider from './modules/genres/getGenresMovieList/GetGenresMovieListProvider'
import GetGenresTvShowListProvider from './modules/genres/getGenresTvShowList/GetGenresTvShowListProvider'
import GetLatestProvider from './modules/movies/getLatest/GetLatestMoviesProvider'
import GetVideosProvider from './modules/movies/getVideos/GetVideosMoviesProvider'
import GetTrendingProvider from './modules/trending/getTrending/GetTrendingProvider'
import GetVideosTvShowProvider from './modules/tvShows/getVideos/GetVideosTvShowProvider'
import GetMovieDetailsProvider from './modules/movies/getDetails/GetMovieDetailsProvider'

let beanContainerRegistryInstance = null

export class BeanContainerRegistry {
  constructor() {
    this._beanContainer = new BeanContainer()

    // TODO INJECT THIS DEPENCIES IN A NEAR FUTURE
    const accessToken = theMovieDBConfigEnv
    const axios = require('axios')

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
  }

  static getInstance() {
    if (!beanContainerRegistryInstance) {
      beanContainerRegistryInstance = new BeanContainerRegistry()
    }
    return beanContainerRegistryInstance
  }

  static getBeanContainer() {
    return BeanContainerRegistry.getInstance()._beanContainer
  }
}

export default { BeanContainerRegistry }
