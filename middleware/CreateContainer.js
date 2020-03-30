import BeanContainer from './BeanContainer'
import * as Globalconfiguration from './framework/modules/security/GlobalConfiguration'
import Configuration from './Configuration'

module.exports = function() {
  const container = new BeanContainer()

  // TODO INJECT THIS DEPENCIES IN A NEAR FUTURE
  const accessToken = Globalconfiguration.theMovieDBConfigEnv
  const axios = require('axios')

  container.service(
    'configuration',
    (container) =>
      new Configuration({
        accessToken,
        axios
      })
  )

  require('./modules/genres/getGenresMovieList/GetGenresMovieListProvider')(
    container
  )

  require('./modules/genres/getGenresMovieList/GetGenresMovieListProvider')(
    container
  )
  require('./modules/genres/getGenresTvShowList/GetGenresTvShowListProvider')(
    container
  )
  require('./modules/movies/getLatest/GetLatesProvider')(container)
  require('./modules/movies/getVideos/GetVideosProvider')(container)
  require('./modules/trending/getTrending/GetTrendingProvider')(container)
  require('./modules/tvShows/getVideos/GetVideosProvider')(container)

  return container
}
