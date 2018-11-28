import api from '../api'

const state = () => ({
  list: {
    data: []
  },
  hot: [],
  item: {}
})

const mutations = {
  GET_LIST(state, action) {
    state.list = action.result
  },

  GET_HOT_LIST(state, action) {
    state.hot = action.result.data
  },
  GET_ITEM(state, action) {
    state.item = action.result
  }
}

const actions = {
  async getList({ commit }, params) {
    const res = await api.article.getList(params)
    commit('GET_LIST', res)
  },

  async getHotList({ commit }) {
    const res = await api.article.getList({ hot: 1 })
    commit('GET_HOT_LIST', res)
  },

  async getItem({ commit }, id) {
    const res = await api.article.getItem(id)
    commit('GET_ITEM', res)
  }
}


export { state, mutations, actions }