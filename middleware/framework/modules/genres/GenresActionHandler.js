import localesEs from '../../../../locales/es'
import localesEn from '../../../../locales/en'
import { Slugger } from '../ServiceLocator'
/* eslint-disable camelcase, no-console */

const locale = {
  es: localesEs,
  en: localesEn
}

class GenresActionHandler {
  constructor(slugger, locale, language) {
    console.log('GenresActionHandler...')
    this._genresForTvUsingNameAsKey = Object.assign(
      {},
      ...locale[language].genres.tv.map((genre) => ({
        [slugger.sluggify([genre.name])]: genre.id
      }))
    )
    this._genresForTvUsingIdAsKey = Object.assign(
      {},
      ...locale[language].genres.tv.map((genre) => ({
        [genre.id]: slugger.sluggify([genre.name])
      }))
    )
    this._genresForMoviesUsingNameAsKey = Object.assign(
      {},
      ...locale[language].genres.movies.map((genre) => ({
        [slugger.sluggify([genre.name])]: genre.id
      }))
    )
    this._genresForMoviesUsingIdAsKey = Object.assign(
      {},
      ...locale[language].genres.movies.map((genre) => ({
        [genre.id]: slugger.sluggify([genre.name])
      }))
    )
  }

  getGenreIdForTvBy(name) {
    return this._genresForTvUsingNameAsKey[name]
  }

  getGenreNameForTvBy(id) {
    return this._genresForTvUsingIdAsKey[id]
  }

  getGenreIdForMoviesBy(name) {
    return this._genresForMoviesUsingNameAsKey[name]
  }

  getGenreNameForMoviesBy(id) {
    return this._genresForMoviesUsingIdAsKey[id]
  }
}

export default {
  es: new GenresActionHandler(Slugger, locale, 'es'),
  en: new GenresActionHandler(Slugger, locale, 'en')
}
