// eslint-disable-next-line no-unused-vars
import { BeanContainerRegistry } from '../../../../middleware/BeanContainerRegistry'
import {
  GetLatestMoviesRepository,
  GetLatestMoviesRepositoryRequest, GetLatestMoviesRepositoryResponse
} from '../../../../middleware/modules/movies/getLatest/infrastructure/repository/GetLatestMoviesRepository'

console.log('welcome! GetLatestMoviesRepository test')

describe('GetLatestMoviesRepository', function() {
  describe('execute', function() {
    it('should save', async function() {
      // given
      // eslint-disable-next-line no-unused-vars
      const expected = {
        adult: false,
        backdrop_path: '/hkaV970KVugX2ZSffp2jTFhcH0w.jpg',
        belongs_to_collection: null,
        budget: 0,
        genres: [],
        homepage: '',
        id: 683882,
        imdb_id: 'tt0861703',
        original_language: 'en',
        original_title: 'Dil Kitna Nadan Hai',
        overview:
          'Kiran, upon completion of her studies abroad, returns to India. She falls in love with Raja without realising his deception.',
        popularity: 0,
        poster_path: '/5kVkkr7N28OjJnY74wcvf8iITdV.jpg',
        production_companies: [],
        production_countries: [],
        release_date: '1997-05-08',
        revenue: 0,
        runtime: 0,
        spoken_languages: [],
        status: 'Released',
        tagline: '',
        title: 'Dil Kitna Nadan Hai',
        video: false,
        vote_average: 0,
        vote_count: 0
      }
      const mockedAds = require('./getLatestMoviesRepositoryAxiosResponse.json')
      const mockGetLatestMoviesRepository = jest.fn()
      GetLatestMoviesRepository.prototype.execute = mockGetLatestMoviesRepository
      mockGetLatestMoviesRepository.mockReturnValue(Promise.resolve(mockedAds))
      // when
      const beanContainer = BeanContainerRegistry.getBeanContainer()
      const getLatestMoviesRepositoryResponse = await beanContainer.getLatestMoviesRepository.executeAsync(
        new GetLatestMoviesRepositoryRequest()
      )
      // then
      console.log(JSON.stringify(getLatestMoviesRepositoryResponse))
      expect(new GetLatestMoviesRepositoryResponse(expected)).toEqual(
        getLatestMoviesRepositoryResponse
      )
    })
  })
})
