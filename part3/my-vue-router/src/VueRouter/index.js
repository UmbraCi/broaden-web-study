/**
 * 自定义路由插件入口文件
 */
let _VUE = null

export default class VueRouter {
    static install(Vue) {
        //1.判断当前插件是否已经安装
        if (VueRouter.install.installed) {
            return
        }
        VueRouter.install.installed = true
        //2.把Vue构造函数记录到全局变量中
        _VUE = Vue
        //3.把创建的VUE实例时，传入的router对象，注入到VUE实例上
        /**
         * @type {import(vue).mixin}
         */
        _VUE.mixin({
            beforeCreate() {
                if (this.$options.router) {
                    _VUE.prototype.$router = this.$options.router
                    this.$options.router.init()
                }
            },
        })
    }
    constructor(options) {
        this.options = options
        this.routeMap = {}
        this.data = _VUE.observable({ current: '/ ' })
    }
    createRouteMap() {
        this.options.routes.forEach(route => {
            this.routeMap[route.path] = route.component
        })
    }
    initComponent(Vue) {
        Vue.component('router-link', {
            props: {
                to: String,
            },
            render(h) {
                return h(
                    'a',
                    {
                        attrs: {
                            href: this.to,
                        },
                        on: {
                            click: this.clickHandler,
                        },
                    },
                    [this.$slots.default],
                )
            },
            // template: '<a :href="to"><slot></slot></a>',
            methods: {
                clickHandler(e) {
                    history.pushState({}, '', this.to)
                    this.$router.data.current = this.to
                    e.preventDefault()
                },
            },
        })
        const self = this
        Vue.component('router-view', {
            render(h) {
                let component = self.routeMap[self.data.current]
                return h(component)
            },
        })
    }
    initEvent() {
        window.addEventListener('popstate', () => {
            this.data.current = window.location.pathname
        })
    }
    init() {
        this.createRouteMap()
        this.initComponent(_VUE)
        this.initEvent()
    }
}
