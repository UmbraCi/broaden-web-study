import './editor.css'

export default () => {
  const editorElement = document.createElement('div')

  editorElement.contentEditable = true
  editorElement.className = 'editor'
  editorElement.id = 'editor'

  console.log('editor init completed')

  console.log("1231232")

  return editorElement
}
