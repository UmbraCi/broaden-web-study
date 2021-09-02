import createEditor from './editor'
import background from './better.png'
import './global.css'

const editor = createEditor()
document.body.appendChild(editor)

const img = new Image()
img.src = background
document.body.appendChild(img)

// ================================================================
// HMR 手动处理模块热更新
// 不用担心这些代码在生产环境冗余的问题，因为通过 webpack 打包后，
// 这些代码全部会被移除，这些只是开发阶段用到
if(module.hot){
  let lastEditor = editor
module.hot.accept('./editor',()=>{
  // console.log("editor模块更新了")
  const value = lastEditor.innerHTML
  document.body.removeChild(lastEditor)
  const newEditor = createEditor()
  newEditor.innerHTML = value
  document.body.appendChild(newEditor)
  lastEditor = newEditor
})

module.hot.accept('./better.png',()=>{
    img.src = background
})
}
