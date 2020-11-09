/* eslint-disable camelcase */
export default class GetVideoDetailsResponse {
  constructor(id, iso_639_1, iso_3166_1, key, name, site, size, type) {
    this._id = id
    this._iso_639_1 = iso_639_1
    this._iso_3166_1 = iso_3166_1
    this._key = key
    this._name = name
    this._site = site
    this._size = size
    this._type = type
  }
}
