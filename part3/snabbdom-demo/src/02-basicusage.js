import {init} from 'snabbdom/build/package/init'
import {h} from 'snabbdom/build/package/h'

const patch = init([])
let vnode = h('div#container',[
    h('h1','hello Snabbdom'),
    h('p','这是一个p')
])

let app = document.querySelector('#app')
let oldVnode = patch(app,vnode)

setTimeout(() => {
    vnode = h('div#container',[
        h('h1','hello world'),
        h('p','hello p')
    ])
    patch(oldVnode,vnode)
}, 2000);

setTimeout(() => {
    patch(oldVnode,h('!'))
}, 4000);