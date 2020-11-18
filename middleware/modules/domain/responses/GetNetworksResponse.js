const _isEmpty = require('lodash.isempty')
/* eslint-disable camelcase */
class GetNetworksResponse {
  constructor({ name, id, logo_path, origin_country }) {
    this._name = name
    this._id = id
    this._logo_path = logo_path
    this._origin_country = origin_country
  }
}

export default class GetNetworksTransformer {
  static transform(networks) {
    if (_isEmpty(networks)) {
      return []
    }
    return networks.map((network) => {
      // eslint-disable-next-line no-new
      return new GetNetworksResponse({ ...network })
    })
  }
}
