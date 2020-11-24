const _isEmpty = require('lodash.isempty')
/* eslint-disable camelcase */
class GetReviewAuthorDetailsResponse {
  constructor({ name, username, avatar_path, rating }) {
    this._name = name
    this._username = username
    this._avatar_path = avatar_path
    this._rating = rating ?? 5
  }
}

class GetReviewsResponse {
  constructor({
    author,
    author_details,
    content,
    created_at,
    id,
    updated_at,
    url
  }) {
    this._id = id
    this._author = author
    this._author_details = new GetReviewAuthorDetailsResponse({
      ...author_details
    })
    this._content = content
    this._created_at = created_at
    this._updated_at = updated_at
    this._url = url
  }
}

export default class GetReviewsTransformer {
  static transform(reviews) {
    if (_isEmpty(reviews) || _isEmpty(reviews?.results)) {
      return []
    }
    return reviews?.results.map((review) => {
      // eslint-disable-next-line no-new
      return new GetReviewsResponse({ ...review })
    })
  }
}
