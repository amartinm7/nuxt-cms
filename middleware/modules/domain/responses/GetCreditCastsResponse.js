/* eslint-disable camelcase */
export default class GetCreditCastsResponse {
  constructor({
    cast_id,
    character,
    credit_id,
    gender,
    id,
    name,
    order,
    profile_path
  }) {
    this._cast_id = cast_id
    this._character = character
    this._credit_id = credit_id
    this._gender = gender
    this._id = id
    this._name = name
    this._order = order
    this._profile_path = profile_path
  }
}
