<template>
  <div v-if="networks && networks[0]">
    <span class="uk-text-meta ech-basic"> {{ $t('networks') }}: </span>
    <nuxt-link
      :to="getTvShowByNetworkURL2({ network: networks[0], page: 1, language })"
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
import LocaleManager from '@/middleware/modules/vue/mixins/LocaleManager'

export default {
  name: 'EchNetworkName',
  mixins: [NetworkManager, LocaleManager],
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
