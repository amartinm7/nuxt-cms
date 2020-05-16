/* eslint-disable camelcase, no-console */
import ValuesByDefault from '../../util/ValuesByDefault'
export default {
  methods: {
    getPosterURL(posterPath) {
      console.log('posterPath...' + posterPath)
      const sanitizedPosterPath = posterPath ?? ValuesByDefault.posterPath
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${sanitizedPosterPath}`
    },
    playVideoURL(url) {
      console.log('playVideoURL url...' + url)
      this.url = url ?? ValuesByDefault.videoURL
      this.$uikit.modal('#modalcenter').show()
    },
    clearVideoURL() {
      console.log('reset url...')
      this.url = ''
    }
  }
}
