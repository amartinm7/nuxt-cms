import { BeanContainerRegistry } from '../../../middleware/BeanContainerRegistry'
import {
  GetTrendingMoviesRepository,
  GetTrendingMoviesRepositoryRequest,
  GetTrendingMoviesRepositoryResponse
} from '../../../middleware/modules/trending/getTrending/infrastructure/repository/GetTrendingMoviesRepository'
import {
  MEDIA_TYPES,
  TIME_WINDOWS_TYPES
} from '../../../middleware/modules/trending/getTrending/adomain/TrendingTypes'

console.log('welcome! GetTrendingMoviesRepository test')

describe('GetTrendingMoviesRepository', function() {
  describe('execute', function() {
    it('should save', async function() {
      // given
      const expected = {
        page: 1,
        total_pages: 1000,
        total_results: 20000,
        results: [
          {
            id: 181812,
            video: false,
            vote_count: 3231,
            vote_average: 6.5,
            title: 'Star Wars: The Rise of Skywalker',
            release_date: '2019-12-18',
            original_language: 'en',
            original_title: 'Star Wars: The Rise of Skywalker',
            genre_ids: [28, 12, 878],
            backdrop_path: '/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg',
            adult: false,
            overview:
              'The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.',
            poster_path: '/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
            popularity: 140.287,
            media_type: 'movies'
          }
        ]
      }
      const mockedAds = require('./getTrendingMoviesRepositoryResponse.json')
      const mockGetTrendingMoviesRepository = jest.fn()
      GetTrendingMoviesRepository.prototype.execute = mockGetTrendingMoviesRepository
      mockGetTrendingMoviesRepository.mockReturnValue(
        Promise.resolve(mockedAds)
      )
      // when
      const beanContainer = BeanContainerRegistry.getBeanContainerWith('token')
      const getTrendingMoviesRepositoryResponse = await beanContainer.getTrendingMoviesRepository.executeAsync(
        new GetTrendingMoviesRepositoryRequest({
          mediaType: MEDIA_TYPES.MOVIE,
          timeWindow: TIME_WINDOWS_TYPES.WEEK
        })
      )
      // then
      console.log(JSON.stringify(getTrendingMoviesRepositoryResponse))
      // expect(getLatestFilmsRepositoryResponse.data.title).toEqual(expected.title)
      expect(new GetTrendingMoviesRepositoryResponse(expected)).toEqual(
        getTrendingMoviesRepositoryResponse
      )
    })
  })
})
