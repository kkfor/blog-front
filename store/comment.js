import api from '../api'

const state = () => ({
  list: {
    data: []
  }
})

const mutations = {
  GET_LIST(state, action) {
    state.list = action.result
  },
  POST_ITEM(state, action) {
    state.list.data.push(action.result)
    state.list.total++
  },
  CLEAR_LIST(state) {
    state.list = {
      data: []
    }
  }
}

const actions = {
  async getList({ commit }, params) {
    const res = await api.comment.getList(params)
    commit('GET_LIST', res)
  },
  async postItem({ commit }, obj) {
    const res = await api.comment.postItem(obj)
    commit('POST_ITEM', res)
  },
  clearList({ commit }) {
    commit('CLEAR_LIST')
  }
}

export default { state, mutations, actions }
