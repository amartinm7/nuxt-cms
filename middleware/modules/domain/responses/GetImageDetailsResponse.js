const _isEmpty = require('lodash.isempty')
/* eslint-disable camelcase */
class GetBackDropsPostersDetailsResponse {
  constructor({
    aspect_ratio,
    file_path,
    height,
    iso_639_1,
    vote_average,
    vote_count,
    width
  }) {
    this._aspect_ratio = aspect_ratio
    this._file_path = file_path
    this._height = height
    this._iso_639_1 = iso_639_1
    this._vote_average = vote_average
    this._vote_count = vote_count
    this._width = width
  }
}

/* eslint-disable camelcase */
class GetImageDetailsResponse {
  constructor({ backdrops, posters }) {
    this._backdrops = backdrops ?? []
    this._posters = posters ?? []
  }
}

export default class GetImageDetailsTransformer {
  static transform(images) {
    if (_isEmpty(images)) {
      return new GetImageDetailsResponse({ backdrops: [], posters: [] })
    }
    const backdrops = _isEmpty(images.backdrops)
      ? []
      : images.backdrops.map((backdrop) => {
          return new GetBackDropsPostersDetailsResponse(backdrop)
        })
    const posters = _isEmpty(images.posters)
      ? []
      : images.posters.map((poster) => {
          return new GetBackDropsPostersDetailsResponse(poster)
        })
    return new GetImageDetailsResponse({ backdrops, posters })
  }
}
