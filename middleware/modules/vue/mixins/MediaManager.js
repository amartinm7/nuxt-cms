export default {
  methods: {
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${posterPath}`
    },
    playVideoURL(url) {
      console.log('playVideoURL url...' + url)
      this.url = url
      this.$uikit.modal('#modalcenter').show()
    },
    clearVideoURL() {
      console.log('reset url...')
      this.url = ''
    }
  }
}
