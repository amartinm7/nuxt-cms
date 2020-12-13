<template>
  <div v-if="deathday">
    <span class="uk-text-meta ech-basic"> {{ $t('deathday') }}: </span>
    <span
      class="uk-text-lead uk-text-small ech-basic"
      uk-icon="icon: calendar; ratio: 0.60;"
    >
      {{ deathday | moment('DD-MM-YYYY') }}
    </span>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */

export default {
  name: 'EchDeathday',
  props: {
    deathday: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>
<style></style>
