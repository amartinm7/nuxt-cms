export const state = () => ({
  blogPosts: [],
  videoURL:
    'https://www.youtube.com/embed/Yj0l7iGKh8g?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1'
})

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list
  },
  videoURL(state, url) {
    state.videoURL = url
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    // eslint-disable-next-line prettier/prettier
    const files = await require.context('~/assets/content/blog/', false, /\.json$/)
    const blogPosts = files.keys().map((key) => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setBlogPosts', blogPosts)
  }
}
