export const state = () => ({
  network: {
    _id: '',
    _name: '',
    _logo_path: 0
  }
})

export const getters = {
  getNetwork: (state) => {
    return state.network
  }
}

export const mutations = {
  SET_NETWORK(state, network) {
    state.network = network
  }
}

export const actions = {
  setNetworkURL({ commit }, network) {
    commit('SET_NETWORK', network)
  }
}
