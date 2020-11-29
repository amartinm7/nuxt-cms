import GetAxiosRequest from '@/middleware/framework/modules/axios/GetAxiosRequest'
import GetSeasonDetailsTransformer from '@/middleware/modules/domain/responses/GetSeasonDetailsResponse'
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
    const { movie_id, language, season_number } = {
      ...getTvSeasonsRepositoryRequest
    }
    const urlPath = `/tv/${movie_id}/season/${season_number}?language=${language}&append_to_response=images,credits,keywords,reviews,videos`
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(getTvSeasonsRepositoryRequest) {
    const { movie_id, movie_name } = {
      ...getTvSeasonsRepositoryRequest
    }
    const axiosResponse = await this.execute(getTvSeasonsRepositoryRequest)
    const season = {
      movie_id,
      movie_name,
      ...axiosResponse.data
    }
    // eslint-disable-next-line new-cap
    return GetSeasonDetailsTransformer.transform({ season })
  }
}

class GetTvSeasonsRepositoryRequest {
  constructor({ movie_id, movie_name, language, season_number }) {
    this.movie_id = movie_id
    this.movie_name = movie_name
    this.language = language
    this.season_number = season_number
  }
}

export { GetTvSeasonsRepository, GetTvSeasonsRepositoryRequest }
