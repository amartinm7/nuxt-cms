<template>
  <div>
    <p class="uk-text-meta uk-margin-medium-top">
      <nuxt-link :to="getTvShowByNetworkURL(network)" class="uk-link-reset">
        <span>
          <img
            class="uk-align-center ech-basic"
            :src="getNetWorkURLByArray(network)"
            :alt="network"
          />
        </span>
      </nuxt-link>
    </p>
  </div>
</template>
<script>
import MediaManager from '@/middleware/modules/vue/mixins/MediaManager'

export default {
  name: 'EchNetworkLogo',
  mixins: [MediaManager],
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
