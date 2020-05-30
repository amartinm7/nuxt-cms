export const state = () => ({
  filtersForTvShows: [],
  filtersForMovies: []
})

export const getters = {
  getFiltersForTvShows: (state) => {
    return state.filtersForTvShows
  },
  getFiltersForMovies: (state) => {
    return state.filtersForMovies
  }
}

export const mutations = {
  SET_FILTER_FOR_TV_SHOWS(state, filterId) {
    if (state.filtersForTvShows.includes(filterId)) {
      const index = state.filtersForTvShows.indexOf(filterId)
      state.filtersForTvShows.splice(index, 1)
    } else {
      state.filtersForTvShows.push(filterId)
    }
  },
  SET_FILTER_FOR_MOVIES(state, filterId) {
    if (state.filtersForMovies.includes(filterId)) {
      const index = state.filtersForMovies.indexOf(filterId)
      state.filtersForMovies.splice(index, 1)
    } else {
      state.filtersForMovies.push(filterId)
    }
  }
}

export const actions = {
  setFilterForTvShows({ commit }, filterId) {
    commit('SET_FILTER_FOR_TV_SHOWS', filterId)
  },
  setFilterForMovies({ commit }, filterId) {
    commit('SET_FILTER_FOR_MOVIES', filterId)
  }
}

export const commandActions = {
  tv: {
    airingToday: 'airingToday',
    onTheAirTv: 'onTheAirTv',
    popular: 'popular',
    topRated: 'topRated'
  },
  movies: {
    nowPlaying: 'nowPlaying',
    popular: 'popular',
    topRated: 'topRated',
    upcoming: 'upcoming'
  }
}
