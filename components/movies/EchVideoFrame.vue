<template>
  <div>
    <iframe
      :src="url"
      width="1920"
      height="1080"
      frameborder="0"
      uk-responsive
      uk-video="automute: false"
      loading="lazy"
      :title="movie_title"
    ></iframe>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
export default {
  name: 'EchVideoFrame',
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
  }
}
</script>
<style></style>
