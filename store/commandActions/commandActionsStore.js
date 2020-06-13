import MediaTypes from '../../middleware/modules/domain/MediaTypes'

export const state = () => ({
  actionForTvShows: commandActions[MediaTypes.tv].airingToday,
  actionForMovies: commandActions[MediaTypes.movie].nowPlaying
})

export const getters = {
  getActionForTvShows: (state) => {
    return state.actionForTvShows
  },
  getActionForMovies: (state) => {
    return state.actionForMovies
  }
}

export const mutations = {
  SET_ACTION_FOR_TV_SHOWS(state, actionName) {
    state.actionForTvShows = actionName
  },
  SET_ACTION_FOR_MOVIES(state, actionName) {
    state.actionForMovies = actionName
  }
}

export const actions = {
  setActionForTvShows({ commit }, actionName) {
    commit('SET_ACTION_FOR_TV_SHOWS', actionName)
  },
  setActionForMovies({ commit }, actionName) {
    commit('SET_ACTION_FOR_MOVIES', actionName)
  }
}

export const commandActions = {
  tv: {
    airingToday: 'airingToday',
    onTheAirTv: 'onTheAirTv',
    popular: 'popular',
    topRated: 'topRated',
    byGenres: 'More Series'
  },
  movie: {
    nowPlaying: 'nowPlaying',
    popular: 'popular',
    topRated: 'topRated',
    upcoming: 'upcoming',
    byGenres: 'More Movies'
  }
}
