/* eslint-disable camelcase */
export default class RequestHeader {
  constructor({ _title, _name, _overview, _poster_path }) {
    this.title = _title || _name
    this.overview = _overview
    this.posterPath = _poster_path
  }
}
