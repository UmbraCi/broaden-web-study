import View from './components/view'
import Link from './components/link'

export let _Vue = null
export default function install(Vue){
    _Vue = Vue
    _Vue.mixin({
        beforeCreate() {
            // 把用户传入的router挂载到所有组件上
            if(this.$options.router){
                //根组件
                this._routerRoot = this
                this._router = this.$options.router
                this._router.init(this)
            }else{
                //子组件
                this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
            }
        },
    })
    Vue.component('RouterView',View)
    Vue.component('RouterLink',Link)
}