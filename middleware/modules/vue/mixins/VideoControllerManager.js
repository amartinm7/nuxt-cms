import ValuesByDefault from '../../util/ValuesByDefault'
export default {
  methods: {
    playVideoURL(url) {
      this.url = url ?? ValuesByDefault.videoURL
      this.$uikit.modal('#modalcenter').show()
    },
    clearVideoURL() {
      this.url = ''
    }
  }
}
