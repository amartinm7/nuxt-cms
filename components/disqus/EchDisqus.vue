<template>
  <div>
    <div class="uk-position-relative uk-visible-toggle uk-light uk-width-auto">
      <vue-disqus
        :shortname="getShortName()"
        :identifier="getIdentifier()"
        :url="getCurrentPath()"
      ></vue-disqus>
    </div>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
export default {
  name: 'EchDisqus',
  methods: {
    getIdentifier() {
      return this.$route.path.split('/').pop()
    },
    getShortName() {
      return 'estrenoscinehoy'
    },
    getCurrentPath() {
      const url = `https://www.estrenoscinehoy.com/${this.$route.path}`
      return url
    }
  }
}
</script>
<style></style>
