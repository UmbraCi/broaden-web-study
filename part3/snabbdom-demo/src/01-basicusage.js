import {init} from 'snabbdom/build/package/init'
import {h} from 'snabbdom/build/package/h'

const patch = init([])

//h函数的第一个参数：标签+选择器
//第二个参数：如果是字符串就是标签中内容
let vnode = h('div#container.cls',{
    hook:{
        init(vnode){
            console.log(vnode)
        },
        create(emptyNode,vnode){
            console.log(vnode.elm)
        }
    }
},'hello world')

let app = document.querySelector('#app')
let oldVnode = patch(app,vnode)

vnode = h('div#container.xxx','hello snabbdom')
patch(oldVnode,vnode)