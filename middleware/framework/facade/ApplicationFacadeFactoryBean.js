import { GetLatestMoviesRepository } from '../repository/movies/getMovies/GetLatestMoviesRepository'
import { GetTrendingMoviesRepository } from '../repository/trending/getTrending/GetTrendingMoviesRepository'
import { GetTvVideosRepository } from '../repository/tv/GetVideos/GetTvVideosRepository'
import { GetLatestMoviesService } from '../../application/usecases/movies/getMovies/GetLatestMoviesService'
import { GetTrendingMoviesService } from '../../application/usecases/trending/getTrending/GetTrendingMoviesService'
import { GetTvVideosService } from '../../application/usecases/tv/GetVideos/GetTvVideosService'
import { GetTrendingMoviesController } from '../controller/trending/getTrending/GetTrendingMoviesController'
import { GetLatestMoviesController } from '../controller/movies/getMovies/GetLatestMoviesController'
import { GetTvVideosController } from '../controller/tv/GetVideos/GetTvVideosController'
import { GetMovieVideosRepository } from '../repository/movies/getVideos/GetMovieVideosRepository'
import { GetMovieVideosService } from '../../application/usecases/movies/getMovieVideos/GetMovieVideosService'
import { GetMovieVideosController } from '../controller/movies/getMovieVideos/GetMovieVideosController'
import * as Globalconfiguration from '../modules/security/GlobalConfiguration'

const accessToken = Globalconfiguration.theMovieDBConfigEnv
const axios = require('axios')

let instance = null

export default class ApplicationFacadeFactoryBean {
  constructor() {
    const config = { axios, accessToken }
    const getLatestMoviesRepository = new GetLatestMoviesRepository(config)
    const getTrendingMoviesRepository = new GetTrendingMoviesRepository(config)
    const getTvVideosRepository = new GetTvVideosRepository(config)
    const getMovieVideosRepository = new GetMovieVideosRepository(config)

    const getLatestMoviesService = new GetLatestMoviesService({
      getLatestMoviesRepository
    })
    const getTrendingMoviesService = new GetTrendingMoviesService({
      getTrendingMoviesRepository
    })
    const getTvVideosService = new GetTvVideosService({ getTvVideosRepository })

    const getMovieVideosService = new GetMovieVideosService({
      getMovieVideosRepository
    })

    this._getLatestMoviesController = new GetLatestMoviesController({
      getLatestMoviesService
    })

    this._getTrendingMoviesController = new GetTrendingMoviesController({
      getTrendingMoviesService
    })

    this._getTvVideosController = new GetTvVideosController({
      getTvVideosService
    })

    this._getMovieVideosController = new GetMovieVideosController({
      getMovieVideosService
    })
  }

  static getInstance() {
    if (!instance) {
      instance = new ApplicationFacadeFactoryBean()
    }
    return instance
  }

  static getLatestMoviesController() {
    return this.getInstance()._getLatestMoviesController
  }

  static getTrendingMoviesController() {
    return this.getInstance()._getTrendingMoviesController
  }

  static getTvVideosController() {
    return this.getInstance()._getTvVideosController
  }

  static getMovieVideosController() {
    return this.getInstance()._getMovieVideosController
  }
}
