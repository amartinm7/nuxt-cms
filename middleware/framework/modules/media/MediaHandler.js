import ValuesByDefault from '../../../modules/domain/ValuesByDefault'

export default class MediaHandler {
  static getPosterURL(posterPath) {
    return posterPath
      ? `https://image.tmdb.org/t/p/w185_and_h278_bestv2${posterPath}`
      : ValuesByDefault.logoURLEstrenosCineHoy
  }

  static getPoster2XURL(posterPath) {
    return posterPath
      ? `https://image.tmdb.org/t/p/w370_and_h556_bestv2${posterPath}`
      : ValuesByDefault.logoURLEstrenosCineHoy
  }
}
