<template>
  <div v-if="budget && budget !== 0">
    <span class="uk-text-meta ech-basic"> {{ $t('budget') }}: </span>
    <span class="uk-text-lead uk-text-small ech-basic">
      ${{ budget | abbreviate }}
    </span>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
export default {
  name: 'EchBudget',
  props: {
    budget: {
      type: Number,
      default() {
        return 0
      }
    }
  }
}
</script>
<style></style>
