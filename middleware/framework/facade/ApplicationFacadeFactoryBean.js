import { GetLatestMoviesRepository } from '../repository/movies/getMovies/GetLatestMoviesRepository'
import { GetTrendingMoviesRepository } from '../repository/trending/GetTrending/GetTrendingMoviesRepository'
import { GetTvVideosRepository } from '../repository/tv/GetVideos/GetTvVideosRepository'
import { GetLatestMoviesService } from '../../application/usecases/movies/getMovies/GetLatestMoviesService'
import { GetTrendingMoviesService } from '../../application/usecases/trending/GetTrending/GetTrendingMoviesService'
import { GetTvVideosService } from '../../application/usecases/tv/GetVideos/GetTvVideosService'
import { GetTrendingMoviesController } from '../controller/trending/GetTrending/GetTrendingMoviesController'
import { GetLatestMoviesController } from '../controller/movies/getMovies/GetLatestMoviesController'
import { GetTvVideosController } from '../controller/tv/GetVideos/GetTvVideosController'

const axios = require('axios')
const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWUzMTJmMzMwZTkwOTk0OWZiNmIwNDViN2VhYmE2NSIsInN1YiI6IjVlNmJkMmMyY2VkYWM0MDAxNzQ5NjJlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YEVmEFcunK4clG1KuUXQm9msRV70n5hF1e9ozfIMjbc`

let instance = null

export default class ApplicationFacadeFactoryBean {
  constructor() {
    const config = { axios, accessToken }
    const getLatestMoviesRepository = new GetLatestMoviesRepository(config)
    const getTrendingMoviesRepository = new GetTrendingMoviesRepository(config)
    const getTvVideosRepository = new GetTvVideosRepository(config)
    const getLatestMoviesService = new GetLatestMoviesService({
      getLatestMoviesRepository
    })
    const getTrendingMoviesService = new GetTrendingMoviesService({
      getTrendingMoviesRepository
    })
    const getTvVideosService = new GetTvVideosService({ getTvVideosRepository })

    this._getLatestMoviesController = new GetLatestMoviesController({
      getLatestMoviesService
    })

    this._getTrendingMoviesController = new GetTrendingMoviesController({
      getTrendingMoviesService
    })

    this._getTvVideosController = new GetTvVideosController({
      getTvVideosService
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
}
