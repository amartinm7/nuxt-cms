import RequestHeader from '@/middleware/framework/modules/requestHeader/RequestHeader'
import ActionMapper from '@/middleware/ActionMapper'
import Slugger from '@/middleware/framework/modules/slugger/Slugger'
import MovieListToJsonLDTransformer from '@/middleware/framework/modules/requestHeader/MovieListToJsonLDTransformer'
import ValuesByDefault from '@/middleware/modules/domain/ValuesByDefault'

export default {
  methods: {
    getSection({ mediaType, language }) {
      const actionNameIndex = this.$route.params.index?.split('-')[0]
      return this.translateKeyMessage({
        actionNameIndex,
        mediaType,
        language
      })
    },
    translateKeyMessage({ actionNameIndex, mediaType, language }) {
      const actionName = ActionMapper.getActionCodes()?.[mediaType]?.[
        actionNameIndex
      ]
      return this.$i18n.messages[language]?.pages?.[mediaType]?.[actionName]
    },
    getTrendingURL({ actionNameIndex, mediaType, language, page }) {
      const actionName = this.translateKeyMessage({
        actionNameIndex,
        mediaType,
        language
      })
      const sluggifyActionName = Slugger.sluggify([actionNameIndex, actionName])
      return `/${language}/${mediaType}/trends/${Date.now()}/${sluggifyActionName}?page=${page}`
    }
  },
  computed: {
    requestHeader() {
      const title = `Estrenos Cine Hoy: ${this.getSection({
        mediaType: this.mediaType,
        language: this.$i18n.locale // coger este parametro de la url
      })}`
      return new RequestHeader({
        _title: `${title}`,
        _overview: `${title}`,
        _poster_path: ValuesByDefault.logoURLEstrenosCineHoy,
        _jsonLD: new MovieListToJsonLDTransformer(
          this.trendingMovies || this.trendingShows,
          this.$i18n.locale
        )
      })
    }
  }
}
