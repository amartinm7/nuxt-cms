<template>
  <div id="modalcenter" class="uk-flex-top" uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      <div>
        <button class="uk-modal-close-default" type="button" uk-close></button>
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
    this.$uikit.util.on('#modalcenter', 'hidden', function() {
      console.log('destroy and closeModal')
      self.$emit('clear-video-url', true)
    })
  }
}
</script>
<style></style>
