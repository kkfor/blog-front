// 首页文章截取
export default (content, length = content.length) => {
  const regexp = /(```js)|`+|#+|>/g
  const text = content.replace(regexp, '')
  const isCut = text && text.length > length
  return isCut ? text.substr(0, length) + '...' : text
}
