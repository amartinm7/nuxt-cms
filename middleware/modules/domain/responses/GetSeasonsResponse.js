const _isEmpty = require('lodash.isempty')

/* eslint-disable camelcase */
class GetSeasonsResponse {
  constructor({
    id,
    episode_count,
    name,
    overview,
    air_date,
    poster_path,
    season_number
  }) {
    this._id = id
    this._episode_count = episode_count
    this._name = name
    this._overview = overview
    this._air_date = air_date
    this._poster_path = poster_path
    this._season_number = season_number
  }
}

export default class GetSeasonsTransformer {
  static transform(seasons) {
    if (_isEmpty(seasons)) {
      return []
    }
    return seasons.map((season) => {
      // eslint-disable-next-line no-new
      return new GetSeasonsResponse({ ...season })
    })
  }
}
