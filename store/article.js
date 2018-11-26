import api from '../api'

const state = () => ({
  list: {
    arts: []
  },
  hot: [],
  item: {}
})

const mutations = {
  GET_LIST(state, action) {
    state.list = action.data
  },

  GET_HOT_LIST(state, action) {
    state.hot = action.data.arts
  },
  GET_ITEM(state, action) {
    state.item = action.data
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
    console.log(11)
    const res = await api.article.getItem(id)
    commit('GET_ITEM', res)
  }
}


export { state, mutations, actions }