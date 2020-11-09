<template>
  <div v-if="networks && networks[0]">
    <span class="uk-text-meta ech-basic"> {{ $t('networks') }}: </span>
    <nuxt-link
      :to="getTvShowByNetworkURL(networks[0])"
      :alt="$t('premiereWithNetwork', { name: networks[0]._name })"
      :uk-tooltip="$t('premiereWithNetwork', { name: networks[0]._name })"
      class="uk-link-reset ech-basic"
    >
      <span
        class="uk-text-lead uk-text-small uk-margin-small-right ech-basic"
        uk-icon="icon: tv; ratio: 0.60;"
      >
        {{ networks[0]._name }}
      </span>
    </nuxt-link>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import NetworkManager from '@/middleware/modules/vue/mixins/NetworkManager'

export default {
  name: 'EchNetworkName',
  mixins: [NetworkManager],
  props: {
    networks: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style></style>
