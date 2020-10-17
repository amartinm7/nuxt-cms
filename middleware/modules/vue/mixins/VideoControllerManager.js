export default {
  data() {
    return {
      url: '',
      showVideo: false
    }
  },
  methods: {
    playVideoURL(url) {
      this.url = url ?? ''
      this.$uikit.modal('#modalcenter').show()
    },
    clearVideoURL() {
      this.url = ''
    },
    playVideo(url) {
      this.url = url ?? ''
      this.showVideo = true
    },
    closeVideo() {
      this.showVideo = false
    }
  }
}
