import ajax from '../ajax'

const url = {
  getItem: '/article/',
  getList: '/article',
  postItem: '/article',
  putItem: '/article/',
  delItem: '/article/'
}

export default {
  getItem(id) {
    const uri = url.getItem + id
    return ajax.get(uri)
  },
  getList(params) {
    params.publish = true
    return ajax.get(url.getList, params)
  },
  postItem(obj) {
    return ajax.post(url.postItem, obj)
  },
  putItem(id, obj) {
    const uri = url.putItem + id
    return ajax.put(uri, obj)
  },
  delItem(id) {
    const uri = url.delItem + id
    return ajax.del(uri)
  }
}

