class Vue{
    constructor(options){
        //1.构造器通过属性保存入参数据
        this.$options = options || {}
        this.$data = options.data || {}
        this.$el = options.el == 'string' ? document.querySelector(options.el) : options.el
        this._proxyDate(this.$data)
        //2.把data中的成员转换成getter和setter，注入到Vue实例中
        //3.调用observer对象，监听数据变化
        //4.调用compiler对象，解析指令和插值表达式
    }
    _proxyDate(data){
        //遍历data中的所有属性
        Object.keys(data).forEach(key=>{
            //把data的属性注入到Vue实例中
            Object.defineProperty(this,key,{
                //enumerable 定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举。
                enumerable:true,
                //configurable 特性表示对象的属性是否可以被删除，以及除 value 和 writable 特性外的其他特性是否可以被修改。
                configurable:true,
                get(){
                    return data[key]
                },
                setInterval(newValue){
                    if(newValue == data[key])   return
                    data[key] = newValue
                }
            })
        })
    }
}