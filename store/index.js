import api from '../api'

export const actions = {
  nuxtServerInit(store, { req }) {
    const initAppData = [
      store.dispatch('getHotList'),
      store.dispatch('getCategory')
    ]

    return Promise.all(initAppData)
  },

  async getHotList({ commit }) {
    const res = await api.article.getArts({ hot: 1 })
    commit('article/GET_HOT_LIST', res)
  },

  async getCategory({ commit }) {
    const res = await api.category.getCategories()
    commit('category/GET_LIST', res)
  }
}