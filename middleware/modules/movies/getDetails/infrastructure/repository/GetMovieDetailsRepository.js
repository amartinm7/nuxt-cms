import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
const _isEmpty = require('lodash.isempty')
/* eslint-disable camelcase, no-console */
class GetMovieDetailsRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get the most newly created movie. This is a live response and will continuously change.
   * @param getLatestFilmsRepositoryRequest
   * @returns {*}
   */
  execute(getMovieDetailsRepositoryRequest) {
    const { movie_id, language } = { ...getMovieDetailsRepositoryRequest }
    const urlPath = `/movie/${movie_id}}?language=${language}&append_to_response=videos,images`
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(getMovieDetailsRepositoryRequest) {
    const axiosResponse = await this.execute(getMovieDetailsRepositoryRequest)
    return new GetMovieDetailsRepositoryResponse({ ...axiosResponse.data })
  }
}

/* eslint-disable camelcase */
class GetMovieDetailsRepositoryRequest {
  constructor({ movie_id, language }) {
    this.movie_id = movie_id
    this.language = language
  }
}

/* eslint-disable camelcase */
class GetMovieDetailsRepositoryResponse {
  constructor({
    adult,
    genres,
    id,
    imdb_id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    runtime,
    status,
    title,
    vote_average,
    vote_count,
    videos,
    images
  }) {
    this._adult = adult
    this._genres = genres
    this._id = id
    this._imdb_id = imdb_id
    this._original_language = original_language
    this._original_title = original_title
    this._overview = overview
    this._popularity = popularity
    this._poster_path = poster_path
    this._release_date = release_date
    this._runtime = runtime
    this._status = status
    this._title = title
    this._vote_average = vote_average
    this._vote_count = vote_count
    if (!_isEmpty(videos) && !_isEmpty(videos.results)) {
      this._videos = videos.results.map((it) => {
        // eslint-disable-next-line no-new
        return new GetVideoDetailsResponse(it)
      })
    }
    if (!_isEmpty(images)) {
      this._images = new GetImageDetailsResponse(images)
    }
  }
}

/* eslint-disable camelcase */
class GetVideoDetailsResponse {
  constructor(id, iso_639_1, iso_3166_1, key, name, site, size, type) {
    this._id = id
    this._iso_639_1 = iso_639_1
    this._iso_3166_1 = iso_3166_1
    this._key = key
    this._name = name
    this._site = site
    this._size = size
    this._type = type
  }
}

/* eslint-disable camelcase */
class GetImageDetailsResponse {
  constructor(images) {
    if (!_isEmpty(images) && !_isEmpty(images.backdrops)) {
      this._backdrops = images.backdrops.map((it) => {
        return new GetBackDropsPostersDetailsResponse(it)
      })
    }
    if (!_isEmpty(images) && !_isEmpty(images.posters)) {
      this._posters = images.posters.map((it) => {
        return new GetBackDropsPostersDetailsResponse(it)
      })
    }
  }
}

/* eslint-disable camelcase */
class GetBackDropsPostersDetailsResponse {
  constructor({
    aspect_ratio,
    file_path,
    height,
    iso_639_1,
    vote_average,
    vote_count,
    width
  }) {
    this._aspect_ratio = aspect_ratio
    this._file_path = file_path
    this._height = height
    this._iso_639_1 = iso_639_1
    this._vote_average = vote_average
    this._vote_count = vote_count
    this._width = width
  }
}

export {
  GetMovieDetailsRepository,
  GetMovieDetailsRepositoryRequest,
  GetMovieDetailsRepositoryResponse
}
