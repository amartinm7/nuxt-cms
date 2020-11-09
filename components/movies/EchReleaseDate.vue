<template>
  <div v-if="releaseDate">
    <span class="uk-text-meta ech-basic"> {{ $t('releaseDate') }}: </span>
    <span
      class="uk-text-lead uk-text-small ech-basic"
      uk-icon="icon: calendar; ratio: 0.60;"
    >
      {{ releaseDate | moment('DD-MMMM-YYYY') }}
    </span>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
export default {
  name: 'EchReleaseDate',
  props: {
    releaseDate: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>
<style></style>
