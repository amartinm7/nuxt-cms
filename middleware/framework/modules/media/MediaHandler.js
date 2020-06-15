import ValuesByDefault from '../../../modules/domain/ValuesByDefault'

export default class MediaHandler {
  static getPosterURL(posterPath) {
    const sanitizedPosterPath = posterPath ?? ValuesByDefault.posterPath
    return `https://image.tmdb.org/t/p/w185_and_h278_bestv2${sanitizedPosterPath}`
  }
}
