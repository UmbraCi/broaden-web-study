import {init} from 'snabbdom/build/package/init'
import {h} from 'snabbdom/build/package/h'
import { styleModule } from 'snabbdom/build/package/modules/style'
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners'

const patch = init([
    styleModule,eventListenersModule
])

let vnode = h('div',[
    h('h1',{style:{backgroundColor:'red'}},'hello world'),
    h('p',{on:{click:eventHandler}},'hello p')
])
function eventHandler(){
    console.log('别点我')
}
let app = document.querySelector('#app')
patch(app,vnode)