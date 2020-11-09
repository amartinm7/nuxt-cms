/* eslint-disable camelcase, no-console */
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import Networks from '@/middleware/modules/domain/Networks'
import Slugger from '@/middleware/framework/modules/slugger/Slugger'

export default {
  methods: {
    getNetWorkLogoURL(network) {
      return `https://image.tmdb.org/t/p/h60${network?._logo_path}`
    },
    getTvShowByNetworkURL(network) {
      const language = this.$i18n.locale
      const mediaTypeTV = MediaTypes.tv
      const networkId = network?._id
      if (!networkId) {
        return `/${language}/`
      }
      const premiereSlug = this.$i18n.messages[this.$i18n.locale].premiere
      return `/${language}/${mediaTypeTV}/byNetwork/${Date.now()}/${Slugger.sluggify(
        [networkId, premiereSlug, network._name]
      )}/?sortedBy=popularity.desc`
    },
    isNetworkStored(networkId) {
      return (
        this.$store.getters['network/networkStore/getNetwork']?._id ===
        Number(networkId)
      )
    },
    getPopularNetworks() {
      return Networks.getMostPopularNetworks()
    },
    routeToDefaultNetwork() {
      if (this.trendingShows._total_results > 0) {
        return
      }
      const defaultPageTo = {
        path: this.getTvShowByNetworkURL(Networks.getDefaultNetWork()),
        query: { sortedBy: this.sortedBy }
      }
      this.$router.push({ ...defaultPageTo })
    }
  }
}
