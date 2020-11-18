const _isEmpty = require('lodash.isempty')
/* eslint-disable camelcase */
class GetGuestStatsDetailsResponse {
  constructor({
    credit_id,
    order,
    character,
    adult,
    gender,
    id,
    known_for_department,
    name,
    original_name,
    popularity,
    profile_path
  }) {
    this._credit_id = credit_id
    this._order = order
    this._character = character
    this._adult = adult
    this._gender = gender
    this._id = id
    this._known_for_department = known_for_department
    this._name = name
    this._original_name = original_name
    this._popularity = popularity
    this._profile_path = profile_path
  }
}

class GetGuestStarsTransformer {
  static transform(guestStars) {
    if (_isEmpty(guestStars)) {
      return {}
    }
    return guestStars.map((guestStar) => {
      // eslint-disable-next-line no-new
      return new GetGuestStatsDetailsResponse({ ...guestStar })
    })
  }
}

class GetCrewDetailsResponse {
  constructor({
    department,
    job,
    credit_id,
    adult,
    gender,
    id,
    known_for_department,
    name,
    original_name,
    popularity,
    profile_path
  }) {
    this._department = department
    this._job = job
    this._credit_id = credit_id
    this._adult = adult
    this._gender = gender
    this._id = id
    this._known_for_department = known_for_department
    this._name = name
    this._original_name = original_name
    this._popularity = popularity
    this._profile_path = profile_path
  }
}

class GetCrewDetailsTransformer {
  static transform(crews) {
    if (_isEmpty(crews)) {
      return {}
    }
    return crews.map((crew) => {
      // eslint-disable-next-line no-new
      return new GetCrewDetailsResponse({ ...crew })
    })
  }
}

class GetEpisodeDetailsResponse {
  constructor({
    id,
    air_date,
    episode_number,
    name,
    overview,
    season_number,
    still_path,
    vote_average,
    vote_account,
    crew,
    guest_stars
  }) {
    this._id = id
    this._air_date = air_date
    this._episode_number = episode_number
    this._name = name
    this._overview = overview
    this._season_number = season_number
    this._still_path = still_path
    this._vote_average = vote_average
    this._vote_account = vote_account
    this._crew = GetCrewDetailsTransformer.transform(crew)
    this._guest_stars = GetGuestStarsTransformer.transform(guest_stars)
  }
}

class GetEpisodesDetailsTransformer {
  static transform(episodes) {
    if (_isEmpty(episodes)) {
      return {}
    }
    return episodes
      .filter((episode) => {
        return !_isEmpty(episode.still_path)
      })
      .map((episode) => {
        return new GetEpisodeDetailsResponse({ ...episode })
      })
  }
}

class GetSeasonResponse {
  constructor({
    movie_id,
    movie_name,
    id,
    _id,
    air_date,
    name,
    overview,
    season_number,
    poster_path,
    episodes
  }) {
    this._movie_id = movie_id
    this._movie_name = movie_name
    this._id = id
    this.__id = _id
    this._air_date = air_date
    this._name = name
    this._overview = overview
    this._season_number = season_number
    this._poster_path = poster_path
    this._episodes = GetEpisodesDetailsTransformer.transform(episodes)
  }
}

export default class GetSeasonDetailsTransformer {
  static transform({ season }) {
    if (_isEmpty(season)) {
      return {}
    }
    return new GetSeasonResponse({ ...season })
  }
}
