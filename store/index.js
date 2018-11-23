import api from '../api'

export const actions = {
  nuxtServerInit(store, { req }) {
    const initAppData = [
      store.dispatch('getHotList')
    ]

    return Promise.all(initAppData)
  },

  async getHotList({ commit }) {
    const res = await api.article.getArts({ hot: 1 })
    commit('article/GET_HOT_LIST', res)
  }
}