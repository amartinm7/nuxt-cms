import { GenresHandler } from '../middleware/framework/modules/ServiceLocator'

export default ({ app }, inject) => {
  inject('genreActionHandler', (locale) => GenresHandler[locale])
}
