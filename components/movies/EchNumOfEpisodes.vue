<template>
  <div v-if="numOfEpisodes && numOfEpisodes !== 0">
    <span class="uk-text-meta ech-basic"> {{ $t('numOfEpisodes') }}: </span>
    <span class="uk-text-lead uk-text-small ech-basic">
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
