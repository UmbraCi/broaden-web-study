import install from './install'
import createMatcher from './create-matcher'

export default class VueRouter{
    constructor(options){
        this._routes = options.routes || []
        //匹配器 {match,addRoutes}
        this.matcher = createMatcher(this._routes)
    }
    //初始化事件监听器
    // eslint-disable-next-line no-unused-vars
    init(app){

    } 
}

VueRouter.install = install