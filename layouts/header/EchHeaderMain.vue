<template>
  <div>
    <div class="uk-position-relative uk-visible-toggle uk-light uk-width-auto">
      <a
        class="uk-button uk-button-default uk-align-center"
        @click="initVideoURL"
      >
        <img
          src="https://image.tmdb.org/t/p/w1000_and_h563_face/6ZdQTBy20HzWudZthAV7NkZWfIb.jpg"
        />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EchHeaderMain',
  methods: {
    initVideoURL(movie) {
      console.log('emit... initVideoURL')
      const url =
        'https://www.youtube.com/embed/Yj0l7iGKh8g?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1'
      this.$emit('outbound-open-video-modal', url)
    }
  }
}
</script>
<style></style>
