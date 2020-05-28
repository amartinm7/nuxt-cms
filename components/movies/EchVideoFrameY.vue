<template>
  <div>
    <vk-modal center :show.sync="show">
      <vk-modal-close @click="closeWindow"></vk-modal-close>
      <iframe
        :src="url"
        width="1920"
        height="1080"
        frameborder="0"
        uk-responsive
        uk-video="automute: true"
      ></iframe>
    </vk-modal>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */

export default {
  name: 'EchVideoFrameY',
  props: {
    url: {
      default() {
        return 'https://www.youtube.com/embed/Yj0l7iGKh8g?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1'
      },
      type: String
    },
    // eslint-disable-next-line vue/prop-name-casing
    show: {
      default() {
        return false
      },
      type: Boolean
    }
  },
  methods: {
    closeWindow() {
      this.$emit('close-video-url', true)
    }
  }
}
</script>
<style></style>
