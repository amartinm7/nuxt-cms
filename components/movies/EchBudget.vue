<template>
  <div v-if="budget && budget !== 0">
    <span class="uk-text-meta"> {{ $t('budget') }}: </span>
    <span class="uk-text-lead uk-text-small"> ${{ budget | abbreviate }} </span>
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
        return ''
      }
    }
  }
}
</script>
<style></style>
