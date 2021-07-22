/**
 * 函子
 */
class Container{
    static of(value){
        return new Container(value)
    }
    constructor (value){
        this._value = value
    }
    map(fn){
        // return new Container(fn(this._value))
        return Container.of(fn(this._value))
    }
}

let r = Container.of(5).map(x=> x+1).map(x => x*x)

console.log(r)

//演示null 和undefined的问题

Container.of(null).map(x=>  x.toUpperCase())