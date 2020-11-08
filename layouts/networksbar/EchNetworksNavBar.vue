<template>
  <div>
    <div class="uk-flex uk-flex-center uk-flex-around">
      <ech-network-logo
        v-for="network in getPopularNetworks()"
        :key="network._id"
        :todo="network"
        :network="network"
        class="ech-basic"
        style="width: 15%"
      ></ech-network-logo>
    </div>
  </div>
</template>
<script>
import NetworkManager from '@/middleware/modules/vue/mixins/NetworkManager'
import EchNetworkLogo from '@/components/movies/EchNetworkLogo'

export default {
  name: 'EchNetworksNavBar',
  components: { EchNetworkLogo },
  mixins: [NetworkManager]
}
</script>
