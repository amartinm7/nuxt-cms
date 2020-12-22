import MovieToJsonLDTransformer from '@/middleware/framework/modules/requestHeader/MovieToJsonLDTransformer'

class MovieListToJsonLDTransformer {
  constructor(trendingMovies, language) {
    this['@context'] = 'https://schema.org'
    this['@type'] = 'ItemList'
    this.itemListElement = trendingMovies?._results?.map(
      (movieResponse, index) => {
        return {
          '@type': 'ListItem',
          position: `${++index}`,
          item: {
            ...new MovieToJsonLDTransformer(movieResponse, language)
          }
        }
      }
    )
  }
}

export default MovieListToJsonLDTransformer
