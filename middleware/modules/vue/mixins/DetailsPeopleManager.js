/* eslint-disable camelcase, no-console */
import RequestHeader from '@/middleware/framework/modules/requestHeader/RequestHeader'
import PeopleToJsonLDTransformer from '@/middleware/framework/modules/requestHeader/PeopleToJsonLDTransformer'

export default {
  computed: {
    requestHeader() {
      const vm = this
      return new RequestHeader({
        _name: vm.people._name,
        _overview: vm.people._biography,
        _poster_path: vm.people._profile_path,
        _jsonLD: new PeopleToJsonLDTransformer(
          vm.people,
          this.$route.path,
          this.$i18n.locale
        )
      })
    }
  }
}
