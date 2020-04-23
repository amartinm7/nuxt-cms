import { BeanContainerRegistry } from '../../../../middleware/BeanContainerRegistry'
import {
  GetTvShowsVideosRepository,
  GetTvShowsVideosRepositoryRequest
} from '../../../../middleware/modules/tvShows/getVideos/infrastructure/repository/GetTvShowsVideosRepository'

const assert = require('assert')

console.log('welcome! GetTvShowsVideosController test')

describe('GetTvShowsVideosController', function() {
  describe('execute', function() {
    it('should save', async function() {
      // given
      // eslint-disable-next-line no-unused-vars
      const expected = {
        _id: 63247,
        _results: [
          {
            _id: '59fc47fec3a3681abb027e0f',
            _key: 'JctIuZfSsa4',
            _name: 'Official Trailer',
            _site: 'YouTube',
            _size: 720,
            _type: 'Trailer'
          }
        ]
      }
      const mockedAds = require('./getTvShowsVideosRepository.json')
      const mockGetTvShowsVideosRepository = jest.fn()
      GetTvShowsVideosRepository.prototype.execute = mockGetTvShowsVideosRepository
      mockGetTvShowsVideosRepository.mockReturnValue(Promise.resolve(mockedAds))
      // when
      const beanContainer = BeanContainerRegistry.getBeanContainerWith('token')
      const getTvShowsVideosRepositoryRequestResponse = await beanContainer.getTvShowsVideosController.execute(
        new GetTvShowsVideosRepositoryRequest({
          movie_id: '63247'
        })
      )
      // then
      console.log(JSON.stringify(getTvShowsVideosRepositoryRequestResponse))
      // expect(getLatestFilmsRepositoryResponse.data.title).toEqual(expected.title)
      expect(getTvShowsVideosRepositoryRequestResponse._results[0]).toEqual(
        expected._results[0]
      )
    })
  })
})
