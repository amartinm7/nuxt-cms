<template>
  <div v-if="revenue && revenue !== 0">
    <span class="uk-text-meta ech-basic"> {{ $t('revenue') }}: </span>
    <span class="uk-text-lead uk-text-small ech-basic">
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
        return 0
      }
    }
  }
}
</script>
<style></style>
