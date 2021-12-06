import install from './install'
import createMatcher from './create-matcher'
import HashHistory from './history/hash'

export default class VueRouter{
    constructor(options){
        this._routes = options.routes || []
        //匹配器 {match,addRoutes}
        this.matcher = createMatcher(this._routes)

        let mode = options.mode || 'hash'
        switch (mode) {
            case 'history':
            //   this.history = new HTML5History(this, options.base)
              break
            case 'hash':
              this.history = new HashHistory(this, options.base, this.fallback)
              break
            case 'abstract':
            //   this.history = new AbstractHistory(this, options.base)
              break
            default:
              if (process.env.NODE_ENV !== 'production') {
                // assert(false, `invalid mode: ${mode}`)
              }
          }
    }
    //初始化事件监听器
    // eslint-disable-next-line no-unused-vars
    init(app){
        const history = this.history
        // eslint-disable-next-line no-unused-vars
        const setUpListener = ()=>{
            history.setUpListener()
        }
        history.transitionTo(
            history.getCurrentLocation(),
            // history.setUpListener
            setUpListener
        )

        history.listen(route=>{
            app._route = route
        })
    } 
}

VueRouter.install = install