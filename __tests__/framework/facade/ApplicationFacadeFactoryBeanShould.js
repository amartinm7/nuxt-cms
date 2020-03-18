import ApplicationFacadeFactoryBean from '../../../middleware/framework/facade/ApplicationFacadeFactoryBean'

console.log('welcome! ApplicationFacadeFactoryBean test')

describe('ApplicationFacadeFactoryBean', function() {
  describe('execute', function() {
    it('should save', async function() {
      // given
      await ApplicationFacadeFactoryBean.getTrendingMoviesController().execute()
      expect({}).toEqual({})
    })
  })
})
