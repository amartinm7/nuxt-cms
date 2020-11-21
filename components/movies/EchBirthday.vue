<template>
  <div v-if="birthday">
    <span class="uk-text-meta ech-basic"> {{ $t('birthday') }}: </span>
    <span
      class="uk-text-lead uk-text-small ech-basic"
      uk-icon="icon: calendar; ratio: 0.60;"
    >
      {{ birthday | moment('DD-MM-YYYY') }}
    </span>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */

export default {
  name: 'EchBirthday',
  props: {
    birthday: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>
<style></style>
