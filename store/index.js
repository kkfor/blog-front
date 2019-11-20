export const actions = {
  nuxtServerInit(store, { req, params, route }) {
    const initAppData = [
      store.dispatch('article/getHotList'),
      store.dispatch('category/getList'),
      // store.dispatch('tag/getList')
    ]

    const { articleId } = params
    if (articleId) {
      initAppData.push(
        // store.dispatch('comment/getList', { article: articleId })
      )
    }

    return Promise.all(initAppData)
  }
}
