import * as ServiceLocator from '../../../../middleware/framework/modules/ServiceLocator'

const assert = require('assert')

console.log('welcome! SluggerShould test')
/* eslint-disable camelcase */
describe('SluggerShould', function() {
  describe('execute', function() {
    it('should save', function() {
      const expectedSlug = '12341234-star-wars-the-rice-of-skywalker'
      const movie_id = 12341234
      const movie_title = 'Star Wars The Rice of SkyWalker'
      const actualSlug = ServiceLocator.Slugger.sluggify(movie_id, movie_title)
      expect(actualSlug).toEqual(expectedSlug)
    })
  })
})

// var print = console.log.bind(console, '>')
