import { GetMovieVideosRepositoryRequest } from '../../infrastructure/repository/GetMovieVideosRepository'
/* eslint-disable camelcase, no-console */
class GetMovieVideosService {
  constructor({ getMovieVideosRepository }) {
    this._getMovieVideosRepository = getMovieVideosRepository
  }

  async execute(getMovieVideosServiceRequest) {
    const getMovieVideosRepositoryResponse = await this._getMovieVideosRepository.executeAsync(
      new GetMovieVideosRepositoryRequest({
        ...getMovieVideosServiceRequest
      })
    )
    return {
      ...getMovieVideosRepositoryResponse
    }
  }
}

/* eslint-disable camelcase */
class GetMovieVideosServiceRequest {
  constructor({ movie_id, isoLangCode }) {
    this.movie_id = movie_id
    this.isoLangCode = isoLangCode
  }
}

export { GetMovieVideosService, GetMovieVideosServiceRequest }
