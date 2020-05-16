import ValuesByDefault from '../../util/ValuesByDefault'
export default {
  methods: {
    getPosterURL(posterPath) {
      console.log('posterPath...' + posterPath)
      const sanitizedPosterPath = posterPath ?? ValuesByDefault.posterPath
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${sanitizedPosterPath}`
    }
  }
}
