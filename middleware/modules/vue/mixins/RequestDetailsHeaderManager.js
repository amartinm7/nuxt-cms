import RequestHeader from '../../../framework/modules/requestHeader/RequestHeader'
import MovieToJsonLDTransformer from '@/middleware/framework/modules/requestHeader/MovieToJsonLDTransformer'

export default {
  computed: {
    requestHeader() {
      const vm = this
      return new RequestHeader({
        ...vm.movies[0],
        _jsonLD: new MovieToJsonLDTransformer(
          vm.movies[0],
          this.$route.path,
          this.$i18n.locale
        )
      })
    }
  }
}
