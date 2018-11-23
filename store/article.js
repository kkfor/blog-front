const state = () => ({
  list: [],
  hot: []
})

const mutations = {
  GET_HOT_LIST(state, action) {
    state.hot = action.data.arts
  },
  GET_LIST(state, action) {
    state.list = action
  }
}


export { state, mutations }