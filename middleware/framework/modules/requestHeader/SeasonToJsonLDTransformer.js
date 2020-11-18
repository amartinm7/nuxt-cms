import MediaHandler from '@/middleware/framework/modules/media/MediaHandler'

class SeasonToJsonLDTransformer {
  constructor(seasonResponse, url, language) {
    this['@context'] = 'https://schema.org'
    this['@type'] = 'Movie'
    // TODO fill the actors
    this.actor = seasonResponse._credits?.map((actor) => {
      return {
        '@type': 'Person',
        name: actor._name
      }
    })
    this.aggregateRating = {
      '@type': 'AggregateRating',
      bestRating: '10',
      ratingValue: seasonResponse._vote_average ?? 5,
      reviewCount: seasonResponse._vote_count ?? 100
    }
    this.description = seasonResponse._overview
    // TODO fill the director
    this.director = {
      '@type': 'Person',
      name: seasonResponse._director?._name
    }
    this.name = `${seasonResponse._movie_name}: ${seasonResponse._name}`
    this.author = [
      {
        '@type': 'Person',
        name: seasonResponse._crew?._screenplay?._name
      }
    ]
    this.identifier = seasonResponse._id
    this.image = MediaHandler.getPoster2XURL(seasonResponse._poster_path)
    this.url = `https://www.estrenoscinehoy.com${url}`
    this.inLanguage = language
    this.dateCreated = seasonResponse._release_date
  }
}

export default SeasonToJsonLDTransformer
