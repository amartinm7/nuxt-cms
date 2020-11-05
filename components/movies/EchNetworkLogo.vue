<template>
  <div>
    <nuxt-link :to="getTvShowByNetworkURL(network)" class="uk-link-reset">
      <span>
        <img
          class="uk-align-center ech-basic"
          :src="getNetWorkLogoURL(network)"
          :alt="$t('premiereWithNetwork', { name: network._name })"
          :uk-tooltip="$t('premiereWithNetwork', { name: network._name })"
          loading="lazy"
        />
      </span>
    </nuxt-link>
  </div>
</template>
<script>
import NetworkManager from '@/middleware/modules/vue/mixins/NetworkManager'

export default {
  name: 'EchNetworkLogo',
  mixins: [NetworkManager],
  props: {
    network: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
