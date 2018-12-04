import marked from 'marked'
import Hljs from './highlight'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight(code) {
    return Hljs.highlightAuto(code).value
  }
})

const renderer = new marked.Renderer()

// 段落解析
const paragraphParse = text => `<p>${text}</p>`

// 代码解析
// const codeParse = (code, lang, escaped) {

// }

renderer.paragraph = paragraphParse
// renderer.code = codeParse

export default (content, tags) => {

  if (typeof content != 'string') return ''

  return marked(content, { renderer })
}