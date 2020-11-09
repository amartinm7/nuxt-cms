/* eslint-disable camelcase */
export default class GetBackDropsPostersDetailsResponse {
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
