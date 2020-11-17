const _isEmpty = require('lodash.isempty')

/* eslint-disable camelcase */
class GetKeywordsResponse {
  constructor({ id, name }) {
    this._id = id
    this._name = name
  }
}
export default class GetKeywordsTransformer {
  static transform(keywords) {
    const results = keywords?.results || keywords?.keywords
    if (_isEmpty(keywords) || _isEmpty(results)) {
      return []
    }
    return results?.map((keyword) => {
      // eslint-disable-next-line no-new
      return new GetKeywordsResponse({ ...keyword })
    })
  }
}
