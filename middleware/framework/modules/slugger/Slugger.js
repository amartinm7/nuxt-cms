const slugger = require('Slugger')

/* eslint-disable camelcase */
class Slugger {
  static sluggify(movie_id, movie_title) {
    return slugger(`${movie_id} ${movie_title}`)
  }
}

export { Slugger }
