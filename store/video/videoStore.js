export const state = () => ({
  videoURL:
    'https://www.youtube.com/embed/Yj0l7iGKh8g?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1'
})

export const getters = {
  getVideoURL: (state) => {
    return state.videoURL
  }
}

export const mutations = {
  SET_VIDEO_URL(state, url) {
    state.videoURL = url
  }
}

export const actions = {
  videoURL({ commit }, url) {
    commit('SET_VIDEO_URL', url)
  }
}
