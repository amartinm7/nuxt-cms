<template>
  <div>
    <div class="uk-flex uk-flex-between ech-scrollspy-effect">
      <nuxt-link
        class="uk-margin-small-right uk-icon ech-spin-icon uk-margin-small-top"
        uk-icon="icon: minus;"
        :uk-tooltip="$t('previousResults')"
        :to="getTvShowByNetworkURL2({ network, page: toPrevious, language })"
      ></nuxt-link>
      <span></span>
      <nuxt-link
        class="uk-margin-small-left uk-icon ech-spin-icon uk-margin-small-top"
        uk-icon="icon: plus;"
        :uk-tooltip="$t('nextResults')"
        :to="getTvShowByNetworkURL2({ network, page: toNext, language })"
      ></nuxt-link>
    </div>
  </div>
</template>
<script>
import NetworkManager from '@/middleware/modules/vue/mixins/NetworkManager'
import PaginationManager from '@/middleware/modules/vue/mixins/PaginationManager'
import LocaleManager from '@/middleware/modules/vue/mixins/LocaleManager'

export default {
  name: 'EchPaginationNew',
  mixins: [NetworkManager, PaginationManager, LocaleManager],
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
