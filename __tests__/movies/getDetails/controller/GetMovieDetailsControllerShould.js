// eslint-disable-next-line no-unused-vars
import { BeanContainerRegistry } from '../../../../middleware/BeanContainerRegistry'
import { GetMovieDetailsRepository } from '../../../../middleware/modules/movies/getDetails/infrastructure/repository/GetMovieDetailsRepository'
import { GetMovieDetailsControllerRequest } from '../../../../middleware/modules/movies/getDetails/userapplication/controller/GetMovieDetailsController'

// eslint-disable-next-line no-unused-vars
const assert = require('assert')

console.log('welcome! GetMovieDetailsController test')

describe('GetMovieDetailsController', function() {
  describe('execute', function() {
    it('should save', async function() {
      // given
      // eslint-disable-next-line no-unused-vars
      const expected = require('./expectedGetMovieDetails.json')

      const mockedAds = require('./getMovieDetailsRepositoryResponse.json')
      const mockGetMovieDetailsRepository = jest.fn()
      GetMovieDetailsRepository.prototype.execute = mockGetMovieDetailsRepository
      mockGetMovieDetailsRepository.mockReturnValue(Promise.resolve(mockedAds))
      // when
      const beanContainer = BeanContainerRegistry.getBeanContainerWith('token')
      const getMovieDetailsControllerResponse = await beanContainer.getMovieDetailsController.execute(
        new GetMovieDetailsControllerRequest({
          movie_id: '454626'
        })
      )
      // then
      // ex pect(getLatestFilmsRepositoryResponse.data.title).toEqual(expected.title)
      // expect(getMovieDetailsControllerResponse).toEqual(expected)
    })
  })
})
