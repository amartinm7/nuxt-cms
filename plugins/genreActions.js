import GenresActionHandler from '../middleware/framework/modules/genres/GenresActionHandler'

export default ({ app }, inject) => {
  // inject('genreActionHandler', (locale) => GenresHandler[locale])
  inject('genreActionHandler', () => GenresActionHandler.en)
}
