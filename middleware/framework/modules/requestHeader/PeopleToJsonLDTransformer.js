import MediaHandler from '@/middleware/framework/modules/media/MediaHandler'

class MovieToJsonLDTransformer {
  constructor(people, url, language) {
    this['@context'] = 'https://schema.org'
    this['@type'] = 'Person'
    this.description = people._overview
    this.identifier = people._imdb_id
    this.image = MediaHandler.getPoster2XURL(people._profile_path)
    this.url = `https://www.estrenoscinehoy.com${url}`
    this.inLanguage = language
    this.jobTitle = people._known_for_department
    this.birthDate = people._birthday
    this.birthPlace = people._place_of_birth
    this.gender = people._gender
  }
}
export default MovieToJsonLDTransformer
