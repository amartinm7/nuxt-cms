<template>
  <div>
    <p v-if="networks && networks[0]" class="uk-text-meta uk-margin-medium-top">
      <nuxt-link :to="getTvShowByNetworkURL(networks)" class="uk-link-reset">
        <span>
          <img
            class="uk-align-center"
            :src="getNetWorkURLByArray(networks)"
            :alt="networks"
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
    networks: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
