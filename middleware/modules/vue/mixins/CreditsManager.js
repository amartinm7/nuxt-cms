const _isEmpty = require('lodash.isempty')

export default {
  computed: {
    credits() {
      if (_isEmpty(this.movies[0]._credits)) return []
      return this.movies[0]._credits.filter((credit) => !!credit.profile_path)
    },
    posters() {
      if (_isEmpty(this.movies[0]._images)) return []
      return this.movies[0]._images._posters
        .filter((poster) => !!poster._file_path)
        .filter((poster) => poster._vote_count > 1)
    },
    videos() {
      return this.movies[0]._videos
    }
  }
}
