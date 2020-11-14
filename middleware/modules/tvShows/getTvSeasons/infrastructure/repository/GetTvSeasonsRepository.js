import GetAxiosRequest from '@/middleware/framework/modules/axios/GetAxiosRequest'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import GetVideosDetailsTransformer from '@/middleware/modules/domain/responses/GetVideoDetailsResponse'
import GetImageDetailsTransformer from '@/middleware/modules/domain/responses/GetImageDetailsResponse'
import GetCreditCastsTransformer from '@/middleware/modules/domain/responses/GetCreditCastsResponse'
import GetCreditCrewTransformer from '@/middleware/modules/domain/responses/GetCreditCrewResponse'
/* eslint-disable camelcase, no-console */
class GetTvSeasonsRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get getTvSeasons
   * @param getTvSeasonsRepositoryRequest
   * @returns {*}
   */
  execute(getTvSeasonsRepositoryRequest) {
    const { movie_id, season_number, language } = {
      ...getTvSeasonsRepositoryRequest
    }
    const urlPath = `/tv/${movie_id}/season/${season_number}?language=${language}&append_to_response=videos,images,credits`
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(getTvSeasonsRepositoryRequest) {
    const axiosResponse = await this.execute(getTvSeasonsRepositoryRequest)
    return new GetTvSeasonsRepositoryResponse({ ...axiosResponse.data })
  }
}

class GetTvSeasonsRepositoryRequest {
  constructor({ movie_id, language }) {
    this.movie_id = movie_id
    this.language = language
  }
}

/* eslint-disable camelcase */
class GetTvSeasonsRepositoryResponse {
  constructor({ page, total_pages, total_results, results }) {
    this._page = page
    this._total_pages = total_pages
    this._total_results = total_results
    this._results = results.map((it) => {
      // eslint-disable-next-line no-new
      return new GetTvSeasonsRepositoryResponseResult(it)
    })
  }
}

class GetTvSeasonsRepositoryResponseResult {
  constructor({
    id,
    _id,
    name,
    air_date,
    overview,
    poster_path,
    season_number,
    episodes,
    videos,
    credits,
    images
  }) {
    this._id = id
    this.__id = _id
    this._name = name
    this.air_date = air_date
    this._overview = overview
    this._poster_path = poster_path
    this._media_type = MediaTypes.tv
    this._season_number = season_number
    this._videos = GetVideosDetailsTransformer.transform(videos)
    this._images = GetImageDetailsTransformer.transform(images)
    this._credits = GetCreditCastsTransformer.transform(credits)
    this._crews = GetCreditCrewTransformer.transform(credits)
    this._crew = GetCreditCrewTransformer.transformByDepartment(this._crews)
    this._director = this._crew._director
    this._screenplay = this._crew._screenplay
    this._producer = this._crew._producer
  }
}

export {
  GetTvSeasonsRepository,
  GetTvSeasonsRepositoryRequest,
  GetTvSeasonsRepositoryResponse,
  GetTvSeasonsRepositoryResponseResult
}
