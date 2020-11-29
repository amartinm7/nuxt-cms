const _isEmpty = require('lodash.isempty')

/* eslint-disable camelcase */
class GetVideoDetailsResponse {
  constructor({ id, iso_639_1, iso_3166_1, key, name, site, size, type }) {
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
export default class GetVideosDetailsTransformer {
  static transform(videos) {
    console.log(
      'GetVideosDetailsTransformer...videos... ' + JSON.stringify(videos)
    )
    if (_isEmpty(videos) || _isEmpty(videos.results)) {
      return []
    }
    return videos.results.map((video) => {
      // eslint-disable-next-line no-new
      return new GetVideoDetailsResponse({ ...video })
    })
  }
}
