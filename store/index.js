export const state = () => ({
  locale: locales.es,
  videoURL:
    'https://www.youtube.com/embed/Yj0l7iGKh8g?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1',
  actionForTvShows: actions.tv.airingToday,
  actionForMovies: actions.movies.latest,
})

export const mutations = {
  setLocale(state, locale) {
    state.locale = locale
  },
  videoURL(state, url) {
    state.videoURL = url
  },
  setActionForTvShows(state, action) {
    state.actionForTvShows = action
  },
  setActionForMovies(state, action) {
    state.actionForMovies = action
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

export const actions = {
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
