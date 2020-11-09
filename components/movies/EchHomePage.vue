<template>
  <div v-if="homePage">
    <span class="uk-text-meta ech-basic">
      <a :href="homePage" :alt="homePage" class="uk-text-lead uk-text-small">
        <span class="uk-text-lead uk-text-small ech-basic"
          >www homepage info</span
        >
        <span
          class="uk-text-lead uk-text-small uk-margin-small-right uk-icon ech-basic"
          uk-icon="icon: info; ratio: 0.60;"
        ></span>
      </a>
    </span>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
export default {
  name: 'EchHomePage',
  props: {
    homePage: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>
<style></style>
