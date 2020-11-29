/* eslint-disable camelcase, no-console */
class GetTvShowsVideosService {
  constructor({ getTvShowsVideosRepository }) {
    this._getTvShowsVideosRepository = getTvShowsVideosRepository
  }

  async execute(getTvShowsVideosServiceRequest) {
    const getTvShowsVideosRepositoryResponse = await this._getTvShowsVideosRepository.executeAsync(
      new GetTvShowsVideosServiceRequest({
        ...getTvShowsVideosServiceRequest
      })
    )
    return {
      ...getTvShowsVideosRepositoryResponse
    }
  }
}

/* eslint-disable camelcase */
class GetTvShowsVideosServiceRequest {
  constructor({ movie_id, isoLangCode }) {
    this.movie_id = movie_id
    this.isoLangCode = isoLangCode
  }
}

export { GetTvShowsVideosService, GetTvShowsVideosServiceRequest }
