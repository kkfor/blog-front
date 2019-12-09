import axios from 'axios'
import config from '~/config'

const instance = axios.create({
  baseURL: config.baseURL
  // withCredentials: true
})

instance.interceptors.request.use(function(req) {
  return req
})
instance.interceptors.response.use(function(res) {
  return res.data.data
})

const Ajax = (methods, url, data) => {
  return new Promise((resolve, reject) => {
    instance[methods](url, data)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default {
  post(url, data) {
    return Ajax('post', url, data)
  },
  put(url, data) {
    return Ajax('put', url, data)
  },
  del(url) {
    return Ajax('delete', url)
  },
  get(url, params) {
    return Ajax('get', url, { params })
  }
}
