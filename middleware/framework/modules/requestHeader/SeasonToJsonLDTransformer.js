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
      ratingValue: this._sanitizeRatingValue(seasonResponse._vote_average),
      reviewCount: this._sanitizeReviewCount(seasonResponse._vote_count)
    }
    this.description = seasonResponse._overview
    // TODO fill the director
    this.director = {
      '@type': 'Person',
      name: seasonResponse._director?._name
    }
    this.name = `${seasonResponse._movie_name}: ${seasonResponse._name}`
    this.identifier = seasonResponse._id
    this.image = MediaHandler.getPoster2XURL(seasonResponse._poster_path)
    this.url = `https://www.estrenoscinehoy.com${url}`
    this.inLanguage = language
    this.dateCreated = seasonResponse._release_date
  }

  // sanitize because google_search says it
  _sanitizeRatingValue(vote) {
    if (vote === undefined) return 5
    if (vote === 0) return 1
    return vote
  }

  _sanitizeReviewCount(vote) {
    if (vote === undefined) return 100
    if (vote === 0) return 1
    return vote
  }
}

export default SeasonToJsonLDTransformer
