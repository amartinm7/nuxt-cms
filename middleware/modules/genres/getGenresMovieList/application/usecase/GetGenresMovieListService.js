/* eslint-disable camelcase, no-console */
class GetGenresMovieListService {
  constructor({ getGenresMovieListRepository }) {
    this._getGenresMovieListRepository = getGenresMovieListRepository
  }

  async execute() {
    const getGenresMovieListRepositoryResponse = await this._getGenresMovieListRepository.executeAsync()
    return {
      ...getGenresMovieListRepositoryResponse
    }
  }
}

export { GetGenresMovieListService }
