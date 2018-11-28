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
  }
}

export default { state, mutations, actions }