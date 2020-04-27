import { BeanContainerRegistry } from '../../../../middleware/BeanContainerRegistry'
import {
  GetTvShowDetailsRepository,
  GetTvShowDetailsRepositoryRequest
} from '../../../../middleware/modules/tvShows/getDetails/infrastructure/repository/GetTvShowDetailsRepository'

const assert = require('assert')

console.log('welcome! GetTvShowsVideosController test')
describe('should GetTvShowsDetailsController', function() {
  describe('given movie_id...', function() {
    const getTvShowDetailsRepositoryRequest = new GetTvShowDetailsRepositoryRequest(
      {
        movie_id: '71446',
        language: 'en-US'
      }
    )
    describe('when execute ...', function() {
      // const mockedAds = require('./getTvShowsDetailsRepository.json')
      // const mockGetTvShowDetailsRepository = jest.fn()
      // GetTvShowDetailsRepository.prototype.execute = mockGetTvShowDetailsRepository
      // mockGetTvShowDetailsRepository.mockReturnValue(Promise.resolve(mockedAds))

      // eslint-disable-next-line require-await
      it('then should get details ...', async function() {
        const mockedAds = require('./getTvShowsDetailsRepository.json')
        const mockGetTvShowDetailsRepository = jest.fn()
        GetTvShowDetailsRepository.prototype.execute = mockGetTvShowDetailsRepository
        mockGetTvShowDetailsRepository.mockReturnValue(
          Promise.resolve(mockedAds)
        )

        const beanContainer = BeanContainerRegistry.getBeanContainerWith(
          'token'
        )
        const getTvShowsDetailsControllerResponse = await beanContainer.getTvShowDetailsController.execute(
          getTvShowDetailsRepositoryRequest
        )
        // eslint-disable-next-line no-unused-vars
        const expected = {
          _id: 71446,
          _number_of_episodes: 31,
          _number_of_seasons: 2
        }
        console.log(JSON.stringify(getTvShowsDetailsControllerResponse))
        expect(getTvShowsDetailsControllerResponse._id).toEqual(expected._id)
        expect(getTvShowsDetailsControllerResponse._number_of_episodes).toEqual(
          expected._number_of_episodes
        )
        expect(getTvShowsDetailsControllerResponse._number_of_seasons).toEqual(
          expected._number_of_seasons
        )
      })
    })
  })
})
