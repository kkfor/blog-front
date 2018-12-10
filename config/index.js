const isDev = process.env.NODE_ENV === 'development'



export default {
  baseURL: isDev ? '//localhost:5000/api' : '//api.kkfor.com/api'
}