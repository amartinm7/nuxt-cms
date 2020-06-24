/* eslint-disable camelcase, no-console */
import RequestHeader from '../../../framework/modules/requestHeader/RequestHeader'

export default {
  computed: {
    requestHeader() {
      const vm = this
      return new RequestHeader({
        _name: vm.people._name,
        _overview: vm.people._biography,
        _poster_path: vm.people._profile_path
      })
    }
  }
}
