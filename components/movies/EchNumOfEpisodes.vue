<template>
  <div v-if="numOfEpisodes && numOfEpisodes !== 0">
    <span class="uk-text-meta"> {{ $t('numOfEpisodes') }}: </span>
    <span class="uk-text-lead uk-text-small">
      {{ numOfEpisodes }}
    </span>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
export default {
  name: 'EchNumOfEpisodes',
  props: {
    numOfEpisodes: {
      type: Number,
      default() {
        return 0
      }
    }
  }
}
</script>
<style></style>
