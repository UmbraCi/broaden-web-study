import History from "./base"
export default class HashHistory extends History{
    constructor(router){
        super(router)
        //确保首次访问的地址是 #/
        ensureSlash()
    }
    //获取当前路由地址
    getCurrentLocation(){
        return window.location.hash.slice(1)
    }
    //监听hashchange的变化
    setUpListener(){
        window.addEventListener('hashchange',()=>{
            this.transitionTo(this.getCurrentLocation())
        })
    }
}

function ensureSlash(){
    //判断当前是否有hash
    if(window.location.hash){
        return 
    }
    //第一次访问
    window.location.hash = '/'
}