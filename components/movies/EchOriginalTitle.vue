<template>
  <div v-if="originalTitle">
    <span class="uk-text-meta ech-basic"> {{ $t('originalTitle') }}: </span>
    <span
      class="uk-text-lead uk-text-small ech-basic"
      uk-icon="icon: info; ratio: 0.60;"
    >
      {{ originalTitle }}
    </span>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */

export default {
  name: 'EchOriginalTitle',
  props: {
    originalTitle: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>
<style></style>
