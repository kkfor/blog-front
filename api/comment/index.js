import ajax from '../ajax'

const url = {
  getList: '/comment',
  postItem: '/comment'
}

export default {
  getList(params) {
    return ajax.get(url.getList, params)
  },
  postItem(obj) {
    return ajax.post(url.postItem, obj)
  }
}
