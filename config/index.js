const isDev = process.env.NODE_ENV === 'development'

export default {
  baseURL: isDev
    ? 'http://localhost:5000/api'
    : // 'https://api.kkfor.com/api' :
      'https://api.kkfor.com/api'
}
