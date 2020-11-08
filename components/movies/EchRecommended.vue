<template>
  <div>
    <span class="uk-text-meta">{{ $t('recommended') }}: </span>
    <span v-if="!adult" class="uk-text-lead uk-text-small">{{
      $t('recommendedForAllPeople')
    }}</span>
    <span v-if="adult" class="uk-text-lead uk-text-small">{{
      $t('recommendedOnlyAdults')
    }}</span>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
export default {
  name: 'EchRecommended',
  props: {
    adult: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
</script>
<style></style>
