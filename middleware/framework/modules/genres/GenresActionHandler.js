import localesEs from '../../../../locales/es'
import localesEn from '../../../../locales/en'
import { Slugger } from '../ServiceLocator'
import MediaTypes from '../../../modules/domain/MediaTypes'
/* eslint-disable camelcase, no-console */

const locale = {
  es: localesEs,
  en: localesEn
}

class GenresActionHandler {
  constructor(slugger, locale, language) {
    this._genresForTvUsingNameAsKey = Object.assign(
      {},
      ...locale[language].genres[MediaTypes.tv].map((genre) => ({
        [slugger.sluggify([genre.name])]: genre.id
      }))
    )
    this._genresForTvUsingIdAsKey = Object.assign(
      {},
      ...locale[language].genres[MediaTypes.tv].map((genre) => ({
        [genre.id]: slugger.sluggify([genre.name])
      }))
    )
    this._genresForMoviesUsingNameAsKey = Object.assign(
      {},
      ...locale[language].genres[MediaTypes.movie].map((genre) => ({
        [slugger.sluggify([genre.name])]: genre.id
      }))
    )
    this._genresForMoviesUsingIdAsKey = Object.assign(
      {},
      ...locale[language].genres[MediaTypes.movie].map((genre) => ({
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

  getGenreIdFor(mediaType, name) {
    if (mediaType === MediaTypes.movie) {
      return this.getGenreIdForMoviesBy(name)
    } else {
      return this.getGenreIdForTvBy(name)
    }
  }

  getGenreNameFor(mediaType, id) {
    if (mediaType === MediaTypes.movie) {
      return this.getGenreNameForMoviesBy(id)
    } else {
      return this.getGenreNameForTvBy(id)
    }
  }
}

export default {
  es: new GenresActionHandler(Slugger, locale, 'es'),
  en: new GenresActionHandler(Slugger, locale, 'en')
}
