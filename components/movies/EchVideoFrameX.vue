<template>
  <div>
    <div class="uk-position-relative uk-visible-toggle uk-light uk-width-auto">
      <a
        class="uk-button uk-button-default uk-align-center"
        href="#modal-center"
        uk-toggle
      >
        <img
          src="https://image.tmdb.org/t/p/w1000_and_h563_face/6ZdQTBy20HzWudZthAV7NkZWfIb.jpg"
        />
      </a>
    </div>
    <div id="modal-center" class="uk-flex-top" uk-modal>
      <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <div>
          <button
            class="uk-modal-close-default"
            type="button"
            uk-close
          ></button>
          <iframe
            :src="url"
            width="1920"
            height="1080"
            frameborder="0"
            uk-responsive
            uk-video="automute: true"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
export default {
  name: 'EchVideoFrameX',
  props: {
    url: {
      default() {
        return 'https://www.youtube.com/embed/Yj0l7iGKh8g?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1'
      },
      type: String
    },
    // eslint-disable-next-line vue/prop-name-casing
    movie_id: {
      default() {
        return 0
      },
      type: Number
    },
    // eslint-disable-next-line vue/prop-name-casing
    movie_title: {
      default() {
        return 'ech-player'
      },
      type: String
    }
  },
  data() {
    return {
      show: true
    }
  },
  mounted() {
    const self = this
    this.$uikit.util.on('#modal-center', 'hidden', function() {
      console.log('destroy and closeModal')
      self.$emit('clear-video-url', true)
    })
  },
  methods: {
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${posterPath}`
    }
  }
}
</script>
<style></style>
