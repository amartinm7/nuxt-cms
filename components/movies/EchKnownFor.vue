<template>
  <div v-if="knownFor">
    <span class="uk-text-meta ech-basic"> {{ $t('knownFor') }}: </span>
    <span
      class="uk-text-lead uk-text-small ech-basic"
      uk-icon="icon: user; ratio: 0.60;"
    >
      {{ knownFor }}
    </span>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */

export default {
  name: 'EchKnownFor',
  props: {
    knownFor: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>
<style></style>
