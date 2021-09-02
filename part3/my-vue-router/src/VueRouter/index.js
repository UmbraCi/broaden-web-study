/**
 * 自定义路由插件入口文件
 */
let _VUE = null;

export default class VueRouter {
    static install(Vue) {
        //1.判断当前插件是否已经安装
        if (VueRouter.install.installed) {
            return;
        }
        VueRouter.install.installed = true;
        //2.把Vue构造函数记录到全局变量中
        _VUE = Vue;
        //3.把创建的VUE实例时，传入的router对象，注入到VUE实例上
        /**
         * @type {import(vue).mixin}
         */
        _VUE.mixin({
            beforeCreate() {
                if (this.$options.router) {
                    //是VUE实例才会有this.$options.router，组件不会有
                    _VUE.prototype.$router = this.$options.router;
                }
            },
        });
    }
    constructor(options) {
        this.options = options;
        this.routeMap = {};
        this.data = _VUE.observable({ current: '/ ' });
    }
}
