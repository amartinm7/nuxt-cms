<template>
  <div v-if="numOfSeasons && numOfSeasons !== 0">
    <span class="uk-text-meta ech-basic"> {{ $t('numOfSeasons') }}: </span>
    <span class="uk-text-lead uk-text-small ech-basic">
      {{ numOfSeasons }}
    </span>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
export default {
  name: 'EchNumOfSeasons',
  props: {
    numOfSeasons: {
      type: Number,
      default() {
        return 0
      }
    }
  }
}
</script>
<style></style>
