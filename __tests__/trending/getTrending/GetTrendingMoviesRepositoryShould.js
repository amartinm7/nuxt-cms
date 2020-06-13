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
            id: 475430,
            video: false,
            vote_count: 27,
            vote_average: 5.3,
            title: 'Artemis Fowl',
            release_date: '2020-06-12',
            original_language: 'en',
            original_title: 'Artemis Fowl',
            genre_ids: [12, 14, 878],
            backdrop_path: '/o0F8xAt8YuEm5mEZviX5pEFC12y.jpg',
            adult: false,
            overview:
              'With the help of his loyal protector Butler, 12-year-old genius Artemis Fowl, descendant of a long line of criminal masterminds, seeks to find his mysteriously disappeared father, and in doing so, uncovers an ancient, underground civilization—the amazingly advanced world of fairies. Deducing that his father’s disappearance is somehow connected to the secretive, reclusive fairy world, cunning Artemis concocts a dangerous plan—so dangerous that he ultimately finds himself in a perilous war of wits with the all-powerful fairies.',
            poster_path: '/ij1ZfANM3EJm6HHS0ZXycX5f74i.jpg',
            popularity: 71.399,
            media_type: 'movie'
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
      // expect(new GetTrendingMoviesRepositoryResponse(expected)).toEqual(
      //   getTrendingMoviesRepositoryResponse
      // )
    })
  })
})
