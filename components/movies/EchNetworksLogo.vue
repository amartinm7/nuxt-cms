<template>
  <div v-if="networks && networks[0]" :uk-tooltip="$t('clickToSeeMoreAbout')">
    <p class="uk-text-meta uk-margin-medium-top ech-basic">
      <ech-network-logo :network="networks[0]"></ech-network-logo>
    </p>
  </div>
</template>
<script>
import EchNetworkLogo from '@/components/movies/EchNetworkLogo'
export default {
  name: 'EchNetworksLogo',
  components: { EchNetworkLogo },
  props: {
    networks: {
      type: Array,
      default() {
        return {}
      }
    }
  }
}
</script>
