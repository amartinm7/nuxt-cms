const _isEmpty = require('lodash.isempty')
/* eslint-disable camelcase */
class GetProductionCountryResponse {
  constructor({ iso_3166_1, name }) {
    this._iso_3166_1 = iso_3166_1
    this._name = name
  }
}

class GetProductionCountryMoviesTransformer {
  static transform(countries) {
    if (_isEmpty(countries)) {
      return []
    }
    return countries.map((country) => {
      // eslint-disable-next-line no-new
      return new GetProductionCountryResponse({ ...country })
    })
  }
}

class GetProductionCountryTvShowTransformer {
  static transform(countries) {
    if (_isEmpty(countries)) {
      return []
    }
    return countries.map((country_code) => {
      // eslint-disable-next-line no-new
      return new GetProductionCountryResponse({ iso_3166_1: country_code })
    })
  }
}

export {
  GetProductionCountryTvShowTransformer,
  GetProductionCountryMoviesTransformer
}
