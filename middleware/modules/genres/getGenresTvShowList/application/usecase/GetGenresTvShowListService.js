/* eslint-disable camelcase, no-console */
class GetGenresTvShowListService {
  constructor({ getGenresTvShowListRepository }) {
    this._getGenresTvShowListRepository = getGenresTvShowListRepository
  }

  async execute() {
    console.log('>>>GetGenresTvShowListService.execute')
    const getGenresTvShowListRepositoryResponse = await this._getGenresTvShowListRepository.executeAsync()
    return {
      ...getGenresTvShowListRepositoryResponse
    }
  }
}

export { GetGenresTvShowListService }
