import createRoute from "../util/route"
export default class History{
    constructor(router){
        this.router = router
        // {path:'/' , matched:[]}
        this.current = createRoute(null,'/')
        //这是个回调函数，是在hashHistory中赋值，作用是改变响应式的_route
        this.cb = null
    }

    listen(cb){
        this.cb = cb
    }

    //跳转到其他位置
    transitionTo(path,onComplete){
        //重新改变current
        this.current = this.router.matcher.match(path)  //根据路由地址拿到路由对象
        
        this.cb && this.cb(this.current)
        
        console.log(this.current)
        onComplete && onComplete()
    }
}