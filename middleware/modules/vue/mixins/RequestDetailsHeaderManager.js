import RequestHeader from '../../../framework/modules/requestHeader/RequestHeader'

export default {
  computed: {
    requestHeader() {
      const vm = this
      return new RequestHeader({
        ...vm.movies[0]
      })
    }
  }
}
