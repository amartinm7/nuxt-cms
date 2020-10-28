import MediaHandler from '@/middleware/framework/modules/media/MediaHandler'

class MovieToJsonLDTransformer {
  constructor(movieResponse, url, language) {
    this['@context'] = 'https://schema.org'
    this['@type'] = 'Movie'
    this.actor = movieResponse._credits?.map((actor) => {
      return {
        '@type': 'Person',
        name: actor.name
      }
    })
    this.aggregateRating = {
      '@type': 'AggregateRating',
      bestRating: '10',
      ratingValue: movieResponse._vote_average,
      reviewCount: movieResponse._vote_count
    }
    this.description = movieResponse._overview
    this.director = {
      '@type': 'Person',
      name: movieResponse._director?._name
    }
    this.name = movieResponse._title
    this.author = [
      {
        '@type': 'Person',
        name: movieResponse._crew?._screenplay?._name
      }
    ]
    this.identifier = movieResponse._imdb_id
    this.image = MediaHandler.getPoster2XURL(movieResponse._poster_path)
    this.url = `https://www.estrenoscinehoy.com${url}`
    this.inLanguage = language
  }
}

export default MovieToJsonLDTransformer
