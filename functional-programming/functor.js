/**
 * 函子:
 * 容器：包含值和值的变形关系（这个变形关系就是函数）
 * 函子：是一个特殊的容器，通过一个普通的对象来实现，该对象具有map方法，map方法可以运行一个函数对值进行处理（变形关系）
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
let r = new Container(5).map(x=>x+1).map(x=>x*x)
console.log(r)