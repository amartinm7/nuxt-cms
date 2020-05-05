export const state = () => ({
  locale: locales.es,
  videoURL:
    'https://www.youtube.com/embed/Yj0l7iGKh8g?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1',
  actionForTvShows: commandActions.tv.airingToday,
  actionForMovies: commandActions.movies.latest
})

export const mutations = {
  SET_LOCALE(state, locale) {
    state.locale = locale
  },
  SET_VIDEO_URL(state, url) {
    state.videoURL = url
  },
  SET_ACTION_FOR_TV_SHOWS(state, actionName) {
    state.actionForTvShows = actionName
  },
  SET_ACTION_FOR_MOVIES(state, actionName) {
    state.actionForMovies = actionName
  }
}

export const actions = {
  setLocale({ commit }, locale) {
    commit('SET_LOCALE', locale)
  },
  videoURL({ commit }, url) {
    commit('SET_VIDEO_URL', url)
  },
  setActionForTvShows({ commit }, actionName) {
    commit('SET_ACTION_FOR_TV_SHOWS', actionName)
  },
  setActionForMovies({ commit }, actionName) {
    commit('SET_ACTION_FOR_MOVIES', actionName)
  }
}

// export const actions = {
//   async nuxtServerInit({ commit }) {
//     // eslint-disable-next-line prettier/prettier
//     const files = await require.context('~/assets/content/blog/', false, /\.json$/)
//     const blogPosts = files.keys().map((key) => {
//       const res = files(key)
//       res.slug = key.slice(2, -5)
//       return res
//     })
//     await commit('setBlogPosts', blogPosts)
//   }
// }

export const locales = {
  es: {
    code: 'es',
    iso: 'es-ES',
    name: 'Español'
  },
  en: {
    code: 'en',
    iso: 'en-EN',
    name: 'English'
  }
}

export const commandActions = {
  tv: {
    airingToday: 'airingToday',
    latest: 'latest',
    onTheAirTv: 'onTheAirTv',
    popular: 'popular',
    topRated: 'topRated'
  },
  movies: {
    latest: 'latest',
    nowPlaying: 'nowPlaying',
    popular: 'popular',
    topRated: 'topRated',
    upcoming: 'upcoming'
  }
}
