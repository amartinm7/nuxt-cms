<template>
  <div>
    <div class="uk-flex uk-flex-between ech-scrollspy-effect">
      <span
        class="uk-margin-small-right uk-icon ech-spin-icon uk-margin-small-top"
        uk-icon="icon: minus;"
        :uk-tooltip="$t('previousResults')"
        @click="toPrevious"
      ></span>
      <span></span>
      <span
        class="uk-margin-small-left uk-icon ech-spin-icon uk-margin-small-top"
        uk-icon="icon: plus;"
        :uk-tooltip="$t('nextResults')"
        @click="toNext"
      ></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EchPagination',
  methods: {
    toPrevious() {
      this.$emit('outbound-to-previous-page')
    },
    toNext() {
      this.$emit('outbound-to-next-page')
    }
  }
}
</script>
