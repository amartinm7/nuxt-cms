import ValuesByDefault from '../../domain/ValuesByDefault'
export default {
  data() {
    return {
      url:
        'https://www.youtube.com/embed/Yj0l7iGKh8g?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1',
      showVideo: false
    }
  },
  methods: {
    playVideoURL(url) {
      this.url = url ?? ValuesByDefault.videoURL
      this.$uikit.modal('#modalcenter').show()
    },
    clearVideoURL() {
      this.url = ''
    },
    playVideo(url) {
      this.url = url ?? ValuesByDefault.videoURL
      this.showVideo = true
    },
    closeVideo() {
      this.showVideo = false
    }
  }
}
