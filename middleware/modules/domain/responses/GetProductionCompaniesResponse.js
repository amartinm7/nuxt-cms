const _isEmpty = require('lodash.isempty')
/* eslint-disable camelcase */
class GetProductionCompaniesResponse {
  constructor({ id, logo_path, name, origin_country }) {
    this._id = id
    this._logo_path = logo_path
    this._name = name
    this._origin_country = origin_country
  }
}

export default class GetProductionCompaniesTransformer {
  static transform(production_companies) {
    if (_isEmpty(production_companies)) {
      return []
    }
    return production_companies.map((production_company) => {
      // eslint-disable-next-line no-new
      return new GetProductionCompaniesResponse({ ...production_company })
    })
  }
}
