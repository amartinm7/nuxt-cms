<template>
  <div v-if="placeOfBirth">
    <span class="uk-text-meta ech-basic"> {{ $t('origin') }}: </span>
    <span
      class="uk-text-lead uk-text-small ech-basic"
      uk-icon="icon: location; ratio: 0.60;"
    >
      {{ placeOfBirth }}
    </span>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */

export default {
  name: 'EchOriginPlaceOfBirth',
  props: {
    placeOfBirth: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>
<style></style>
