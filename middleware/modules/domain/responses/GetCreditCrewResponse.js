const _isEmpty = require('lodash.isempty')

/* eslint-disable camelcase */
class GetCreditCrewResponse {
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

class GetCreditCrewByDepartmentResponse {
  constructor({ director, screenplay, producer }) {
    this._director = director ?? []
    this._screenplay = screenplay ?? []
    this._producer = producer ?? []
  }
}

export default class GetCreditCrewTransformer {
  static transform(credits) {
    if (_isEmpty(credits) || _isEmpty(credits.crew)) {
      return []
    }
    return credits.crew
      .filter((crew) => {
        return !_isEmpty(crew.profile_path)
      })
      .map((crew) => {
        // eslint-disable-next-line no-new
        return new GetCreditCrewResponse({ ...crew })
      })
  }

  /**
   * @returns {{_producer: *, _director: *, _screenplay: *}|*[]}
   * @param crews GetCreditCrewResponse[]
   */
  static transformByDepartment(crews) {
    if (_isEmpty(crews)) {
      return new GetCreditCrewByDepartmentResponse({})
    }

    return new GetCreditCrewByDepartmentResponse({
      director: crews.filter((it) => it._job === 'Director'),
      screenplay: crews.filter(
        (it) => it._job === 'Screenplay' || it._job === 'Novel'
      ),
      producer: crews.filter(
        (it) => it._job === 'Producer' || it._job === 'Executive Producer'
      )
    })
  }
}
