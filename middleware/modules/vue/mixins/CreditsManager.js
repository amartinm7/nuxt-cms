import CrewTypes from '@/middleware/modules/domain/CrewTypes'

const _isEmpty = require('lodash.isempty')

export default {
  computed: {
    sanitizedCredits() {
      if (_isEmpty(this.movies[0]._credits)) return []
      return this.refillArray(
        this.movies[0]._credits.filter((credit) => !!credit._profile_path)
      )
    },
    sanitizedCrews() {
      if (_isEmpty(this.movies[0]._crews)) return []
      return this.refillArray(
        this.movies[0]._crews.filter((credit) => !!credit._profile_path)
      )
    },
    isCredits() {
      return this.type === CrewTypes.credits
    },
    isCrew() {
      return this.type === CrewTypes.crew
    },
    crewTypes() {
      return CrewTypes
    },
    posters() {
      if (_isEmpty(this.movies[0]._images)) return []
      const posters = this.movies[0]._images._posters ?? []
      return this.refillArray(
        posters
          .filter((poster) => !!poster._file_path)
          .filter((poster) => poster._vote_count > 1)
      )
    },
    videos() {
      return this.refillArray(this.movies[0]._videos)
    }
  },
  methods: {
    refillArray(_array) {
      if (_isEmpty(_array)) return []
      let recopiedArray = []
      const rate = 10 / _array.length
      for (let index = 0; index < rate; index++) {
        recopiedArray = recopiedArray.concat(_array)
      }
      return recopiedArray
    }
  }
}
