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
    ></iframe>
  </div>
</template>
<script>
export default {
  name: 'VideoFrame',
  props: {
    url: {
      default() {
        return 'https://www.youtube.com/embed/Yj0l7iGKh8g?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1'
      },
      type: String
    }
  }
}
</script>
<style></style>
