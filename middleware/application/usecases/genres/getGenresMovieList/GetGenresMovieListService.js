class GetGenresMovieListService {
  constructor({ getGenresMovieListRepository }) {
    this._getGenresMovieListRepository = getGenresMovieListRepository
  }

  async execute() {
    console.log('>>>GetGenresMovieListService.execute')
    const getGenresMovieListRepositoryResponse = await this._getGenresMovieListRepository.executeAsync()
    return {
      ...getGenresMovieListRepositoryResponse
    }
  }
}

export { GetGenresMovieListService }
