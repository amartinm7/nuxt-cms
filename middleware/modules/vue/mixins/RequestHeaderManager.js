import RequestHeader from '@/middleware/framework/modules/requestHeader/RequestHeader'
import MovieListToJsonLDTransformer from '@/middleware/framework/modules/requestHeader/MovieListToJsonLDTransformer'
import ValuesByDefault from '@/middleware/modules/domain/ValuesByDefault'
export default {
  computed: {
    requestHeader() {
      const movies =
        this.trendingMovies || this.trendingShows || this.multiSearch
      return new RequestHeader({
        _title: this.title,
        _overview: this.overview,
        _poster_path: ValuesByDefault.logoURLEstrenosCineHoy,
        _jsonLD: new MovieListToJsonLDTransformer(movies, this.$i18n.locale)
      })
    }
  }
}
