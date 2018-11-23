const state = () => ({
  list: []
})

const mutations = {
  GET_LIST(state, action) {
    state.list = action.data
  }
}

export { state, mutations }