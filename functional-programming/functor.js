/**
 * 函子:
 * 1.Functor 是一个容器，它包含了值，就是this.value
 * 2.Functor 具有 map 方法。该方法将容器里面的每一个值，映射到另一个容器。
 * 3.函数式编程里面的运算，都是通过函子完成，即运算不直接针对值，而是针对这个值的容器----函子。(想一想你是不是没直接去操作值)
 * 4.函子本身具有对外接口（map方法），各种函数就是运算符，通过接口接入容器，引发容器里面的值的变形。（说的就是你传进去那个函数把 this.value 给处理了）
 * 5.函数式编程一般约定，函子有一个 of 方法，用来生成新的容器。（就是帮我们 new 了一个对象出来）
 */
class Container{
    static of(value){
        return new Container(value)
    }
    constructor(value){
        this.value = value
    }
    map (fn){
        // return new Container(fn(this.value))
        return Container.of(fn(this.value))
    }
}
// let r = new Container(5).map(x=>x+1).map(x=>x*x)
let r = Container.of(5).map(x => x+1).map(x => x*x)
console.log(r)