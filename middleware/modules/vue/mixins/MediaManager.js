/* eslint-disable camelcase, no-console */
import ValuesByDefault from '../../util/ValuesByDefault'
export default {
  methods: {
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
