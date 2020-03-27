// eslint-disable-next-line no-unused-vars
const assert = require('assert')

console.log('welcome! GetMoviesNowPlayingControllerTest test')

describe('GetMoviesNowPlayingControllerTest', function() {
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
            _type: 'Trailer'
          }
        ]
      }
      const mockedAds = require('./getMoviesNowPlayingRepositoryResponse.json')
      const mockGetMoviesNowPlayingRepository = jest.fn()
      GetMoviesNowPlayingRepository.prototype.execute = mockGetMoviesNowPlayingRepository
      mockGetMoviesNowPlayingRepository.mockReturnValue(
        Promise.resolve(mockedAds)
      )
      // when
      const getMoviesNowPlayingControllerResponse = await ApplicationFacadeFactoryBean.getMoviesNowPlayingController().execute(
        new GetMoviesNowPlayingControllerRequest({
          movie_id: '454626'
        })
      )
      // then
      console.log(JSON.stringify(getMoviesNowPlayingControllerResponse))
      // expect(getLatestFilmsRepositoryResponse.data.title).toEqual(expected.title)
      expect(getMoviesNowPlayingControllerResponse._results[0]).toEqual(
        expected._results[0]
      )
    })
  })
})
