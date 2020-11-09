/* eslint-disable camelcase */
export default class GetCreditCrewResponse {
  constructor({ credit_id, department, gender, id, job, name, profile_path }) {
    this._credit_id = credit_id
    this._department = department
    this._gender = gender
    this._id = id
    this._job = job
    this._name = name
    this._profile_path = profile_path
  }
}
