export const state = () => ({
  locale: locales.es
})

export const getters = {
  getLocale: (state) => {
    return state.locale
  }
}

export const mutations = {
  SET_LOCALE(state, locale) {
    state.locale = locale
  }
}

export const actions = {
  setLocale({ commit }, locale) {
    commit('SET_LOCALE', locale)
  }
}

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
