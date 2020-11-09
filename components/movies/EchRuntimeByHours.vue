<template>
  <div v-if="runtimeByHours">
    <span class="uk-text-meta ech-basic">{{ $t('runtime') }}: </span>
    <span
      class="uk-text-lead uk-text-small ech-basic"
      uk-icon="icon: clock; ratio: 0.60;"
    >
      {{ runtimeByHours }}
    </span>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
export default {
  name: 'EchRuntimeByHours',
  props: {
    runtimeByHours: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>
<style></style>
