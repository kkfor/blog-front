const get = key =>
  localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null
const set = (key, data) => localStorage.setItem(key, JSON.stringify(data))
const del = key => localStorage.removeItem(key)

export const storageUser = {
  get() {
    return get('user')
  },
  set: user => set('user', user)
}
