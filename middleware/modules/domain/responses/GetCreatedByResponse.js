const _isEmpty = require('lodash.isempty')

/* eslint-disable camelcase */
class GetCreatedByResponse {
  constructor({ credit_id, gender, id, name, profile_path }) {
    this._credit_id = credit_id
    this._gender = gender
    this._id = id
    this._name = name
    this._profile_path = profile_path
  }
}

export default class GetCreatedByTransformer {
  static transform(createdBy) {
    if (_isEmpty(createdBy)) {
      return []
    }
    return createdBy.map((crew) => {
      // eslint-disable-next-line no-new
      return new GetCreatedByResponse({ ...crew })
    })
  }
}
