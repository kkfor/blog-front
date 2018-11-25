import api from '../api'

const state = () => ({
  list: []
})

const mutations = {
  GET_LIST(state, action) {
    state.list = action.data
  }
}

const actions = {
  async getList({ commit }) {
    const res = await api.category.getCategories()
    commit('GET_LIST', res)
  }
}

export { state, mutations, actions }