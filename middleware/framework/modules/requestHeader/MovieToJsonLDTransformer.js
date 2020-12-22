import MediaHandler from '@/middleware/framework/modules/media/MediaHandler'
import Slugger from '@/middleware/framework/modules/slugger/Slugger'

class MovieToJsonLDTransformer {
  constructor(movieResponse, language) {
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
      ratingValue: this._sanitizeRatingValue(movieResponse._vote_average),
      reviewCount: this._sanitizeReviewCount(movieResponse._vote_count)
    }
    this.description = movieResponse._overview
    if (this._getDirectorName(movieResponse)) {
      this.director = {
        '@type': 'Person',
        name:
          movieResponse._director?.[0]?._name ||
          movieResponse._crew?._producer?.[0]?._name
      }
    }
    this.name = movieResponse._title || movieResponse._name
    this.identifier = movieResponse._imdb_id
    this.image = MediaHandler.getPoster2XURL(movieResponse._poster_path)
    this.url = `https://www.estrenoscinehoy.com${this._getURL(
      language,
      movieResponse
    )}`
    this.inLanguage = language
    this.dateCreated = movieResponse._release_date
  }

  _getDirectorName(movieResponse) {
    return (
      movieResponse._director?.[0]?._name ||
      movieResponse._crew?._producer?.[0]?._name
    )
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

  _getURL(language, movieResponse) {
    return `/${language}/${movieResponse._media_type}/${Slugger.sluggify([
      movieResponse._id,
      movieResponse._title || movieResponse._name
    ])}`
  }
}

export default MovieToJsonLDTransformer
