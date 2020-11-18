import MediaHandler from '@/middleware/framework/modules/media/MediaHandler'

class MovieToJsonLDTransformer {
  constructor(movieResponse, url, language) {
    this['@context'] = 'https://schema.org'
    this['@type'] = 'Movie'
    this.actor = movieResponse._credits?.map((actor) => {
      return {
        '@type': 'Person',
        name: actor._name
      }
    })
    this.aggregateRating = {
      '@type': 'AggregateRating',
      bestRating: '10',
      ratingValue: movieResponse._vote_average ?? 5,
      reviewCount: movieResponse._vote_count ?? 100
    }
    this.description = movieResponse._overview
    this.director = {
      '@type': 'Person',
      name: movieResponse._director?._name
    }
    this.name = movieResponse._title || movieResponse._name
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
    this.dateCreated = movieResponse._release_date
  }
}

export default MovieToJsonLDTransformer
