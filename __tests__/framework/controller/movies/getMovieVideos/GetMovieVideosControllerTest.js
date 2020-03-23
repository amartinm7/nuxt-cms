// eslint-disable-next-line no-unused-vars
import { GetMovieVideosRepository } from '../../../../../middleware/framework/repository/movies/getVideos/GetMovieVideosRepository'
import ApplicationFacadeFactoryBean from '../../../../../middleware/framework/facade/ApplicationFacadeFactoryBean'
import { GetMovieVideosControllerRequest } from '../../../../../middleware/framework/controller/movies/getMovieVideos/GetMovieVideosController'

const assert = require('assert')

console.log('welcome! GetMovieVideosController test')

describe('GetMovieVideosController', function() {
  describe('execute', function() {
    it('should save', async function() {
      // given
      // eslint-disable-next-line no-unused-vars
      const expected = {
        _id: 454626,
        _results: [
          {
            _id: '5dcac05a6e44bf000fef48e7',
            _key: 'szby7ZHLnkA',
            _name:
              'Sonic The Hedgehog (2020) - New Official Trailer - Paramount Pictures',
            _site: 'YouTube',
            _size: 1080,
            _type: 'Trailer',
            _videoHref: '#ref-szby7ZHLnkA'
          }
        ]
      }
      const mockedAds = require('./getMovieVideosRepositoryResponse.json')
      const mockGetMovieVideosRepository = jest.fn()
      GetMovieVideosRepository.prototype.execute = mockGetMovieVideosRepository
      mockGetMovieVideosRepository.mockReturnValue(Promise.resolve(mockedAds))
      // when
      const getMovieVideosControllerResponse = await ApplicationFacadeFactoryBean.getMovieVideosController().execute(
        new GetMovieVideosControllerRequest({
          movie_id: '454626'
        })
      )
      // then
      console.log(JSON.stringify(getMovieVideosControllerResponse))
      // expect(getLatestFilmsRepositoryResponse.data.title).toEqual(expected.title)
      expect(getMovieVideosControllerResponse._results[0]).toEqual(expected._results[0])
    })
  })
})
