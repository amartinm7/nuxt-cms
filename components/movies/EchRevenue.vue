<template>
  <div v-if="revenue && revenue !== 0">
    <span class="uk-text-meta"> {{ $t('revenue') }}: </span>
    <span class="uk-text-lead uk-text-small">
      ${{ revenue | abbreviate }}
    </span>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
export default {
  name: 'EchRevenue',
  props: {
    revenue: {
      type: Number,
      default() {
        return ''
      }
    }
  }
}
</script>
<style></style>
